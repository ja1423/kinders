import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Child } from "../../child/entities/child.entity";

@Entity()
export class Parent {
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
  phone_number: string;

  @ApiProperty()
  @Column({ nullable: true })
  email: string;

  @ApiProperty()
  @Column({ nullable: true })
  tg_link: string;

  @ApiProperty()
  @Column({ nullable: true })
  passport_seria: string;

  @ApiProperty()
  @Column({ nullable: true })
  passport_number: string;

  @ApiProperty()
  @Column({ nullable: true })
  passport_photo: string; 

  @OneToMany(() => Child, (data) => data.mother_id)
  child: Child[];

  @OneToMany(() => Child, (data) => data.father_id)
  child1: Child[];
}
