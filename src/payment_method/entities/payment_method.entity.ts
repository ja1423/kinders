import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "../../payment/entities/payment.entity";


@Entity()
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @OneToMany(() => Payment, (data) => data.payment_method_id)
  payment: Payment[];
}
