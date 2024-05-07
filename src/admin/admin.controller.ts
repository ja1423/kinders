import { Controller, Get, Post, Body, Patch, Param, Delete, HttpCode, Res, UseGuards } from '@nestjs/common';
import { AdminService } from './admin.service';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { LoginAdminDto } from './dto/login-admin.dto';
import { CookieGetter } from '../decorators/cookie-gettor.decorators';
import { Response } from 'express';
import { ApiHeader } from '@nestjs/swagger';
import { AdminGuard } from '../guards/admin.guard';
import { UserGuard } from '../guards/user.guard';
import { CreatorGuards } from '../guards/creator.guard';


@ApiHeader({
  name: 'Admin',
  description: 'Admin ',
})
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // @UseGuards(CreatorGuards)
  @Post('signUp')
  create(
    @Body() createAdminDto: CreateAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.create(createAdminDto,res);
  }

  // @UseGuards(CreatorGuards)
  @HttpCode(200)
  @Post('signIn')
  async login(
    @Body() loginAdminDto: LoginAdminDto,
    @Res({ passthrough: true }) res: Response,
  ) {
    return this.adminService.login(loginAdminDto, res);
  }

  // @UseGuards(CreatorGuards)
  @HttpCode(200)
  @Post('logout')
  async logout(
    @CookieGetter('refresh_token') refreshToken: string,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.adminService.logout(refreshToken, res);
  }
// 
  // @UseGuards(CreatorGuards)
  @HttpCode(200)
  @Post(':id/refresh')
  async refresh(
    @Param('id') id: number,
    @CookieGetter('refresh_token')
    refreshToken: string,
    @Res({ passthrough: true })
    res: Response,
  ) {
    return this.adminService.refreshToken(+id, refreshToken, res);
  }

  // @UseGuards(UserGuard)
  @Get()
  findAll() {
    return this.adminService.findAll();
  }

  // @UseGuards(UserGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.adminService.findOne(+id);
  }

  // @UseGuards(UserGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAdminDto: UpdateAdminDto) {
    return this.adminService.update(+id, updateAdminDto);
  }

  // @UseGuards(UserGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.adminService.remove(+id);
  }
}
