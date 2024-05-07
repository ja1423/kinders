import { Module } from '@nestjs/common';
import { ChildService } from './child.service';
import { ChildController } from './child.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Child } from './entities/child.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Child]),JwtModule.register({})],
  controllers: [ChildController],
  providers: [ChildService],
})
export class ChildModule {}
