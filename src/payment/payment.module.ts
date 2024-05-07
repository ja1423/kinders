import { Module } from '@nestjs/common';
import { PaymentService } from './payment.service';
import { PaymentController } from './payment.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[TypeOrmModule.forFeature([Payment]),JwtModule.register({})],
  controllers: [PaymentController],
  providers: [PaymentService],
})
export class PaymentModule {}
