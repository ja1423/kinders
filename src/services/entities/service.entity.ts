import { ApiProperty } from "@nestjs/swagger";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Service } from "../../service/entities/service.entity";
import { Child } from "../../child/entities/child.entity";

@Entity()
export class Services {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ManyToOne((type) => Service, (data) => data.services)
  service_id: Service;

  @ManyToOne((type) => Child, (data) => data.services)
  child_id: Child;


}
