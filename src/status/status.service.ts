import { Injectable } from '@nestjs/common';
import { CreateStatusDto } from './dto/create-status.dto';
import { UpdateStatusDto } from './dto/update-status.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Status } from './entities/status.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StatusService {
  constructor(
    @InjectRepository(Status) private statusRepo: Repository<Status>,
  ) {}
  create(createStatusDto: CreateStatusDto) {
    return this.statusRepo.save(createStatusDto);
  }

  findAll() {
    return this.statusRepo.find();
  }

  findOne(id: number) {
    return this.statusRepo.findOneBy({ id });
  }

  async update(id: number, updateStatusDto: UpdateStatusDto) {
    await this.statusRepo.update({ id }, updateStatusDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.statusRepo.delete({ id });
    return id;
  }
}
