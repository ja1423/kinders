import { Injectable } from '@nestjs/common';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MenuService {
  constructor(@InjectRepository(Menu) private menuRepo: Repository<Menu>) {}
  create(createMenuDto: CreateMenuDto) {
    return this.menuRepo.save(createMenuDto);
  }

  findAll() {
    return this.menuRepo.find();
  }

  findOne(id: number) {
    return this.menuRepo.findOneBy({ id });
  }

  async update(id: number, updateMenuDto: UpdateMenuDto) {
    await this.menuRepo.update({ id }, updateMenuDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.menuRepo.delete({ id });
    return id;
  }
}
