import { Module } from '@nestjs/common';
import { ServicesService } from './services.service';
import { ServicesController } from './services.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Services } from './entities/service.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Services]),JwtModule.register({})],
  controllers: [ServicesController],
  providers: [ServicesService],
})
export class ServicesModule {}
