import { Module } from '@nestjs/common';
import { KindergardenService } from './kindergarden.service';
import { KindergardenController } from './kindergarden.controller';
import { JwtModule } from '@nestjs/jwt';
import { Kindergarden } from './entities/kindergarden.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Kindergarden]),JwtModule.register({})],
  controllers: [KindergardenController],
  providers: [KindergardenService],
})
export class KindergardenModule {}
