import { Module } from '@nestjs/common';
import { EducatorService } from './educator.service';
import { EducatorController } from './educator.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Educator } from './entities/educator.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Educator]),JwtModule.register({})],
  controllers: [EducatorController],
  providers: [EducatorService],
})
export class EducatorModule {}
