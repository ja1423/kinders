import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { GroupTypeMenu } from "../../group_type_menu/entities/group_type_menu.entity";


@Entity()
export class Menu {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @OneToMany(() => GroupTypeMenu, (data) => data.menu_id)
  group_type_menu: GroupTypeMenu[];

  @ApiProperty()
  @Column()
  meals: string;


  @ApiProperty()
  @Column()
  volumes: string;


  @ApiProperty()
  @Column()
  photo: string;


  @ApiProperty()
  @Column()
  description: string;
}
