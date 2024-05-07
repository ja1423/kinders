import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Services } from "../../services/entities/service.entity";
import { Parent } from "../../parent/entities/parent.entity";
import { Payment } from "../../payment/entities/payment.entity";

@Entity()
export class Child {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column()
  first_name: string;

  @ApiProperty()
  @Column()
  last_name: string;

  @ApiProperty()
  @Column({ nullable: true })
  date_of_birth: string;

  @ApiProperty()
  @Column({ nullable: true })
  age: string;

  @ApiProperty()
  @Column({ nullable: true })
  gender: string;

  @ApiProperty()
  @Column({ nullable: true })
  photo: string;

  @ApiProperty()
  @Column({ nullable: true })
  metrika_photo: string;

  @OneToMany(() => Services, (data) => data.child_id)
  services: Services[];

  @OneToMany(() => Payment, (data) => data.child_id)
  payment: Payment[];

  @ManyToOne((type) => Parent, (data) => data.child)
  mother_id: Parent;

  @ManyToOne((data) => Parent, (data) => data.child1)
  father_id: Parent;
}
