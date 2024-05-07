import { Injectable } from '@nestjs/common';
import { CreateChildDto } from './dto/create-child.dto';
import { UpdateChildDto } from './dto/update-child.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Child } from './entities/child.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ChildService {
  constructor(@InjectRepository(Child) private childRepo: Repository<Child>) {}
  create(createChildDto: CreateChildDto) {
    return this.childRepo.save(createChildDto);
  }

  findAll() {
    return this.childRepo.find({relations:{mother_id:true, father_id:true}});
  }

  findOne(id: number) {
    return this.childRepo.findOneBy({ id });
  }

  async update(id: number, updateChildDto: UpdateChildDto) {
    await this.childRepo.update({ id }, updateChildDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.childRepo.delete({ id });
    return id;
  }
}
