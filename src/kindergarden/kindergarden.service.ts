import { Injectable } from '@nestjs/common';
import { CreateKindergardenDto } from './dto/create-kindergarden.dto';
import { UpdateKindergardenDto } from './dto/update-kindergarden.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Kindergarden } from './entities/kindergarden.entity';
import { Repository } from 'typeorm';

@Injectable()
export class KindergardenService {
  constructor(
    @InjectRepository(Kindergarden)
    private kindergardenRepo: Repository<Kindergarden>,
  ) {}
  create(createKindergardenDto: CreateKindergardenDto) {
    return this.kindergardenRepo.save(createKindergardenDto);
  }

  findAll() {
    return this.kindergardenRepo.find();
  }

  findOne(id: number) {
    return this.kindergardenRepo.findOneBy({ id });
  }

  async update(id: number, updatekindergardenDto: UpdateKindergardenDto) {
    await this.kindergardenRepo.update({ id }, updatekindergardenDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.kindergardenRepo.delete({ id });
    return id;
  }
}
