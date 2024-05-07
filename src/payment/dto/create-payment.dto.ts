import { IsString } from 'class-validator';

export class CreatePaymentDto {
  @IsString()
  price: string;

  @IsString()
  date_of_payment: string;

  @IsString()
  paid: string;

  @IsString()
  unpaid: string;
}
