import { Injectable } from '@nestjs/common';
import { CreateGroupTypeDto } from './dto/create-group_type.dto';
import { UpdateGroupTypeDto } from './dto/update-group_type.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { GroupType } from './entities/group_type.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupTypeService {
  constructor(
    @InjectRepository(GroupType) private grouptypeRepo: Repository<GroupType>,
  ) {}
  create(createGroupTypeDto: CreateGroupTypeDto) {
    return this.grouptypeRepo.save(createGroupTypeDto);
  }

  findAll() {
    return this.grouptypeRepo.find();
  }

  findOne(id: number) {
    return this.grouptypeRepo.findOneBy({ id });
  }

  async update(id: number, updateGroupTypeDto: UpdateGroupTypeDto) {
    await this.grouptypeRepo.update({ id }, updateGroupTypeDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.grouptypeRepo.delete({ id });
    return id;
  }
}
