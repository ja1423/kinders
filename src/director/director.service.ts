import { Injectable } from '@nestjs/common';
import { CreateDirectorDto } from './dto/create-director.dto';
import { UpdateDirectorDto } from './dto/update-director.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Director } from './entities/director.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DirectorService {
  constructor(
    @InjectRepository(Director) private directorRepo: Repository<Director>,
  ) {}
  create(createDirectorDto: CreateDirectorDto) {
    return this.directorRepo.save(createDirectorDto);
  }

  findAll() {
    return this.directorRepo.find({relations:{kindergarden_id:true}});
  }

  findOne(id: number) {
    return this.directorRepo.findOneBy({id});
  }
  async update(id: number, updateDirectorDto: UpdateDirectorDto) {
    await this.directorRepo.update({ id }, updateDirectorDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.directorRepo.delete({ id });
    return id;
  }
}
