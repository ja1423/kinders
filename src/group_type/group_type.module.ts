import { Module } from '@nestjs/common';
import { GroupTypeService } from './group_type.service';
import { GroupTypeController } from './group_type.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupType } from './entities/group_type.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [TypeOrmModule.forFeature([GroupType]),JwtModule.register({})],
  controllers: [GroupTypeController],
  providers: [GroupTypeService],
})
export class GroupTypeModule {}
