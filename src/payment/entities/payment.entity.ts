import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { PaymentMethod } from "../../payment_method/entities/payment_method.entity";
import { Status } from "../../status/entities/status.entity";
import { Child } from "../../child/entities/child.entity";


@Entity()
export class Payment {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column()
  price: string;

  @ApiProperty()
  @Column()
  date_of_payment: string;

  @ApiProperty()
  @Column()
  paid: string;

  @ApiProperty()
  @Column()
  unpaid: string;

  @ManyToOne((type) => PaymentMethod, (data) => data.payment)
  payment_method_id: PaymentMethod[];

  @ManyToOne((type) => Status, (data) => data.payment)
  status_id: Status[];

  @ManyToOne((type) => Child, (data) => data.payment)
  child_id: Child[];

 
}


