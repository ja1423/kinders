import { Injectable } from '@nestjs/common';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Parent } from './entities/parent.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ParentService {
  constructor(
    @InjectRepository(Parent) private parentRepo: Repository<Parent>,
  ) {}
  create(createParentDto: CreateParentDto) {
    return this.parentRepo.save(createParentDto);
  }

  findAll() {
    return this.parentRepo.find();
  }

  findOne(id: number) {
    return this.parentRepo.findOneBy({ id });
  }

  async update(id: number, updateParentDto: UpdateParentDto) {
    await this.parentRepo.update({ id }, updateParentDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.parentRepo.delete({ id });
    return id;
  }
}
