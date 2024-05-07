import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Payment } from "../../payment/entities/payment.entity";

@Entity()
export class Status {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

 

  @OneToMany(() => Payment, (data) => data.status_id)
  payment: Payment[];
}
