import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Group } from "../../group/entities/group.entity";
import { Director } from "../../director/entities/director.entity";

@Entity()
export class Kindergarden {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  address: string;

  @ApiProperty()
  @Column()
  location: string;

  @ApiProperty()
  @Column()
  call_center: string;

  @ApiProperty()
  @Column()
  link: string;

  @ApiProperty()
  @Column()
  email: string;

  @OneToMany(() => Group, (data) => data.kindergarden_id)
  group: Group[];

  @OneToMany(() => Director, (data) => data.kindergarden_id)
  director_id: Director[];
 
}
