import { Injectable } from '@nestjs/common';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Service } from './entities/service.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServiceService {
  constructor(
    @InjectRepository(Service) private serviceRepo: Repository<Service>,
  ) {}
  create(createServiceDto: CreateServiceDto) {
    return this.serviceRepo.save(createServiceDto);
  }

  findAll() {
    return this.serviceRepo.find();
  }

  findOne(id: number) {
    return this.serviceRepo.findOneBy({ id });
  }

  async update(id: number, updateServiceDto: UpdateServiceDto) {
    await this.serviceRepo.update({ id }, updateServiceDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.serviceRepo.delete({ id });
    return id;
  }
}
