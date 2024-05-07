import { Module,Logger } from '@nestjs/common';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Admin } from './entities/admin.entity';
import { JwtModule } from '@nestjs/jwt';
import { MailModule } from '../mail/mail.module';


@Module({
  imports: [
    TypeOrmModule.forFeature([Admin]),
    JwtModule.register({}),
    MailModule,
    
  ],
  controllers: [AdminController],
  providers: [AdminService, Logger],
})
export class AdminModule {}
