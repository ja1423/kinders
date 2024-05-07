import { Injectable } from '@nestjs/common';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PaymentMethod } from './entities/payment_method.entity';

@Injectable()
export class PaymentMethodService {
  constructor(
    @InjectRepository(PaymentMethod)
    private paymentmethodRepo: Repository<PaymentMethod>,
  ) {}
  create(createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentmethodRepo.save(createPaymentMethodDto);
  }

  findAll() {
    return this.paymentmethodRepo.find();
  }

  findOne(id: number) {
    return this.paymentmethodRepo.findOneBy({ id });
  }

  async update(id: number, updatePaymentMethodDto: UpdatePaymentMethodDto) {
    await this.paymentmethodRepo.update({ id }, updatePaymentMethodDto);
    return this.findOne(id);
  }

  async remove(id: number) {
    await this.paymentmethodRepo.delete({ id });
    return id;
  }
}
