import { BadRequestException, ForbiddenException, Injectable,Logger } from '@nestjs/common';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { getRepository, Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Response } from 'express';
import { JwtService } from '@nestjs/jwt';
import { LoginAdminDto } from './dto/login-admin.dto';
import { MailService } from '../mail/mail.service';
import { v4 } from 'uuid';

// import {}


@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(Admin) private adminRepo: Repository<Admin>,
    private jwtService: JwtService,
    private logger: Logger,
    private readonly mailService: MailService,
  ) {}

  async getTokens(admin: Admin) {
    const payload = {
      id: admin.id,
      is_active: admin.is_active,
      is_owner: admin.is_creator,
    };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwtService.signAsync(payload, {
        secret: process.env.ACCESS_TOKEN_KEY,
        expiresIn: process.env.ACCESS_TOKEN_TIME,
      }),
      this.jwtService.signAsync(payload, {
        secret: process.env.REFRESH_TOKEN_KEY,
        expiresIn: process.env.REFRESH_TOKEN_TIME,
      }),
    ]);
    return {
      accessToken: accessToken,
      refresh_token: refreshToken,
    };
  }

  async create(createAdminDto: CreateAdminDto, res: Response) {
    this.logger.debug('signup', AdminService.name);
    this.logger.verbose('signup', AdminService.name);
    this.logger.warn('signup', AdminService.name);
    this.logger.log('signup', AdminService.name);

    const admin = await this.adminRepo.findOneBy({
      email: createAdminDto.email,
    });
    if (admin) {
      throw new BadRequestException('Bunday foydalanuvchi mavjud');
    }
    if (createAdminDto.password !== createAdminDto.confirm_password) {
      throw new BadRequestException('Parollar mos emas');
    }
    const hashed_password = await bcrypt.hash(createAdminDto.password, 7);
    const newAdmin = await this.adminRepo.save({
      ...createAdminDto,
      hashed_password,
    });
    const tokens = await this.getTokens(newAdmin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const activation_link = v4();
    const is_active = await newAdmin.is_active;

    const updatedAdmin = await this.adminRepo.save({
      id: newAdmin.id,
      hashed_refresh_token,
      activation_link,
      hashed_password,
      is_active,
    });
    console.log(updatedAdmin);

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const updateAdmin = updatedAdmin;

    const data = await this.adminRepo.findOne({
      where: {
        id: updatedAdmin.id,
      },
    });

    console.log(updatedAdmin);

    // try {
    await this.mailService.sendMail(data);
    // } catch (error) {
    //   throw new BadRequestException('Xatni yuborishda xatolik');
    // }
    const response = {
      message: 'Admin registered',
      admin: updateAdmin,
      tokens,
    };
    return response;
  }

  async activate(link: string) {
    if (!link) {
      throw new BadRequestException('Activation link not found');
    }

    const updatedAdmin = await this.adminRepo.update(
      { activation_link: link },
      { is_active: true },
    );

    if (!updatedAdmin.affected) {
      throw new BadRequestException(
        'Admin already activated or link is invalid',
      );
    }

    const response = {
      message: 'Admin activated successfully',
      admin: { is_active: true },
    };

    return response;
  }

  async login(loginAdminDto: LoginAdminDto, res: Response) {
    const { email, password } = loginAdminDto;
    const admin = await this.adminRepo.findOne({ where: { email } });
    if (!admin) {
      throw new BadRequestException('Admin not found');
    }
    if (!admin.is_active) {
      throw new BadRequestException('Admin  is not activate');
    }
    const isMatchPass = await bcrypt.compare(password, admin.hashed_password);
    if (!isMatchPass) {
      throw new BadRequestException('Password do not match');
    }

    const tokens = await this.getTokens(admin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);
    const is_active = await admin.is_active;
    const hashed_password = await bcrypt.hash(loginAdminDto.password, 7);
    const activation_link = v4();

    const updatedAdmin = await this.adminRepo.save({
      id: admin.id,
      hashed_refresh_token,
      is_active,
      hashed_password,
      activation_link,
    });
    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });
    const response = {
      message: 'Admin logged in',
      admin: updatedAdmin,
      tokens,
    };
    return response;
  }

  async logout(refreshToken: string, res: Response) {
    const adminData = await this.jwtService.verify(refreshToken, {
      secret: process.env.REFRESH_TOKEN_KEY,
    });
    if (!adminData) {
      throw new ForbiddenException('Admin not verified');
    }
    const checkAdmin = await this.adminRepo.findOneBy({ id: adminData.id });
    if (!checkAdmin) {
      throw new BadRequestException('Admin not Found');
    }
    const updateAdmin = await this.adminRepo.save({
      ...checkAdmin,
      hashed_refresh_token: null,
    });
    res.clearCookie('refresh_token');
    const response = {
      message: 'Admin logged out successfully',
      admin_hashed_token: updateAdmin.hashed_refresh_token,
    };
    return response;
  }

  async refreshToken(adminId: number, refreshToken: string, res: Response) {
    const decodedToken = await this.jwtService.decode(refreshToken);
    if (adminId !== decodedToken['id']) {
      throw new BadRequestException('server not found');
    }
    const admin = await this.adminRepo.findOne({ where: { id: adminId } });

    if (!admin || !admin.hashed_refresh_token) {
      throw new BadRequestException('admin not found');
    }
    const tokenMatch = await bcrypt.compare(
      refreshToken,
      admin.hashed_refresh_token,
    );

    if (!tokenMatch) {
      throw new ForbiddenException('Forbidden');
    }

    const tokens = await this.getTokens(admin);
    const hashed_refresh_token = await bcrypt.hash(tokens.refresh_token, 7);

    const checkAdmin = await this.adminRepo.findOneBy({ id: admin.id });
    if (!checkAdmin) {
      throw new BadRequestException('Admin not Found');
    }
    const updateAdmin = await this.adminRepo.save({
      ...checkAdmin,
      hashed_refresh_token: hashed_refresh_token,
    });

    res.cookie('refresh_token', tokens.refresh_token, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    });

    const response = {
      message: 'Admin refreshedToken',
      admin: updateAdmin.full_name,

      tokens,
    };
    return response;
  }

  async findAll(): Promise<Admin[]> {
    return this.adminRepo.find();
  }

  findOne(id: number) {
    return this.adminRepo.findOneBy({ id });
  }

  async update(id: number, updateAdminDto: UpdateAdminDto) {
    await this.adminRepo.update({ id }, updateAdminDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.adminRepo.delete({ id });
    return id;
  }
}
