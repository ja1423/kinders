import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GroupTypeMenu } from "../../group_type_menu/entities/group_type_menu.entity";
import { Group } from "../../group/entities/group.entity";

@Entity()
export class GroupType {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ApiProperty()
  @Column()
  name: string;

  @ApiProperty()
  @Column()
  description: string;

  @ApiProperty()
  @Column()
  max_of_child: number;

  @OneToMany(() => GroupTypeMenu, (data) => data.group_type_id)
  group_type_menu_id: GroupTypeMenu[];

  @OneToMany(() => Group, (data) => data.group_type_id)
  group: Group[];
}
