import { Module } from '@nestjs/common';
import { GroupTypeMenuService } from './group_type_menu.service';
import { GroupTypeMenuController } from './group_type_menu.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupTypeMenu } from './entities/group_type_menu.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([GroupTypeMenu]),JwtModule.register({})],
  controllers: [GroupTypeMenuController],
  providers: [GroupTypeMenuService],
})
export class GroupTypeMenuModule {}
