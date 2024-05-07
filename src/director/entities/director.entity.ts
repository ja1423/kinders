import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Kindergarden } from "../../kindergarden/entities/kindergarden.entity";

@Entity()
export class Director {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column()
  full_name: string;

  @ApiProperty()
  @Column({ nullable: true })
  phone_number?: string;

  @ApiProperty()
  @Column({ nullable: true })
  tg_link?: string;

  @ApiProperty()
  @Column({ nullable: true })
  email?: string;

  @ManyToOne((type) => Kindergarden, (data) => data.director_id)
  kindergarden_id: Kindergarden;
}
