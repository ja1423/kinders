import { Injectable } from '@nestjs/common';
import { CreateGroupTypeMenuDto } from './dto/create-group_type_menu.dto';
import { UpdateGroupTypeMenuDto } from './dto/update-group_type_menu.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GroupTypeMenu } from './entities/group_type_menu.entity';

@Injectable()
export class GroupTypeMenuService {
  constructor(
    @InjectRepository(GroupTypeMenu)
    private grouptypeMenuRepo: Repository<GroupTypeMenu>,
  ) {}
  create(createGroupTypeMenuDto: CreateGroupTypeMenuDto) {
    return this.grouptypeMenuRepo.save(createGroupTypeMenuDto);
  }

  findAll() {
    return this.grouptypeMenuRepo.find({
      relations: { group_type_id: true, menu_id: true },
    });
  }

  findOne(id: number) {
    return this.grouptypeMenuRepo.findOneBy({ id });
  }

  async update(id: number, updateGroupTypeMenuDto: UpdateGroupTypeMenuDto) {
    await this.grouptypeMenuRepo.update({ id }, updateGroupTypeMenuDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.grouptypeMenuRepo.delete({ id });
    return id;
  }
}
