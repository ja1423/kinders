import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "../../group/entities/group.entity";

@Entity()
export class Educator {
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
  @Column()
  email: string;

  @ApiProperty()
  @Column({ nullable: true })
  date_of_birth: string;

  @ApiProperty()
  @Column()
  phone_number: string;

  @ApiProperty()
  @Column()
  degree: string;

  @ApiProperty()
  @Column()
  expression: string;

  @ApiProperty()
  @Column()
  diplom: string;

  @OneToMany(() => Group, (data) => data.educator_id)
  group: Group[];
}
