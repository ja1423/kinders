import { Module } from '@nestjs/common';
import { ParentService } from './parent.service';
import { ParentController } from './parent.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Parent } from './entities/parent.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Parent]),JwtModule.register({})],
  controllers: [ParentController],
  providers: [ParentService],
})
export class ParentModule {}
