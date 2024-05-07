import { Injectable } from '@nestjs/common';
import { CreateEducatorDto } from './dto/create-educator.dto';
import { UpdateEducatorDto } from './dto/update-educator.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Educator } from './entities/educator.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EducatorService {
  constructor(@InjectRepository(Educator)private educatorRepo:Repository<Educator>){}
  create(createEducatorDto: CreateEducatorDto) {
    return this.educatorRepo.save(createEducatorDto);
  }

  findAll() {
    return this.educatorRepo.find();
  }

  findOne(id: number) {
    return this.educatorRepo.findOneBy({id});
  }

  async update(id: number, updateEducatorDto: UpdateEducatorDto) {
    await this.educatorRepo.update({ id }, updateEducatorDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.educatorRepo.delete({ id });
    return id;
  }
}
