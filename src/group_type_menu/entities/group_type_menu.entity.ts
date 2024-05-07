import { ApiProperty } from "@nestjs/swagger";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { GroupType } from "../../group_type/entities/group_type.entity";
import { Menu } from "../../menu/entities/menu.entity";

@Entity()
export class GroupTypeMenu {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @ManyToOne((type) => GroupType, (data) => data.group_type_menu_id)
  group_type_id: GroupType;


  @ManyToOne((type) => Menu, (data) => data.group_type_menu)
  menu_id: Menu;


}
