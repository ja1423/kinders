import { Injectable } from '@nestjs/common';
import { CreateServicesDto } from './dto/create-service.dto';
import { UpdateServicesDto } from './dto/update-service.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Services } from './entities/service.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ServicesService {
  constructor(@InjectRepository(Services)private servicesRepo:Repository<Services>) {
    
  }
  create(createServiceDto: CreateServicesDto) {
    return this.servicesRepo.save(createServiceDto);
  }

  findAll() {
    return this.servicesRepo.find({relations:{child_id:true,service_id:true}});
  }

  findOne(id: number) {
    return this.servicesRepo.findOneBy({id});
  }

  async update(id: number, updateServicesDto: UpdateServicesDto) {
    await this.servicesRepo.update({ id }, updateServicesDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.servicesRepo.delete({ id });
    return id;
  }
}
