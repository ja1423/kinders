import { Module } from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { PaymentMethodController } from './payment_method.controller';
import { JwtModule } from '@nestjs/jwt';
import { PaymentMethod } from './entities/payment_method.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([PaymentMethod]),JwtModule.register({})],
  controllers: [PaymentMethodController],
  providers: [PaymentMethodService],
})
export class PaymentMethodModule {}
