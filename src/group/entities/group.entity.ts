import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Educator } from "../../educator/entities/educator.entity";
import { GroupType } from "../../group_type/entities/group_type.entity";
import { Kindergarden } from "../../kindergarden/entities/kindergarden.entity";

@Entity()
export class Group {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ManyToOne((type) => Educator, (data) => data.group)
  educator_id: Educator;

  @ManyToOne((type) => GroupType, (data) => data.group)
  group_type_id: GroupType;

  @ManyToOne((type) => Kindergarden, (data) => data.group)
  kindergarden_id: Kindergarden;
}
