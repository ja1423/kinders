import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Services } from "../../services/entities/service.entity";

@Entity()
export class Service {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  price: number;

  @ApiProperty()
  @Column()
  description: string;


  @OneToMany(() => Services, (data) => data.service_id)
  services: Services[];
}
