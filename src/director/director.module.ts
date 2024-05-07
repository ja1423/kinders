import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorController } from './director.controller';
import { Director } from './entities/director.entity';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Director]), JwtModule.register({})],
  controllers: [DirectorController],
  providers: [DirectorService],
})
export class DirectorModule {}
