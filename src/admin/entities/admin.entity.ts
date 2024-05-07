import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Admin {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;
  
  @ApiProperty({
    example:"Admin",
    description:"Admin full_name"
  })
  @Column()
  full_name: string;
  
  @ApiProperty({
    example:"Admin",
    description:"Admin phone_number"
  })
  @Column({ nullable: true })
  phone_number?: string;
  
  @ApiProperty({
    example:"Admin", 
    description:"Admin email"})
  @Column({ nullable: true })
  email?: string;
  
  @ApiProperty({
    example:"Admin", 
    description:"Admin password"
  })
  @Column()
  password: string;
  
  @ApiProperty({
    example:"Admin", 
    description:"Admin tg_link"
  })
  @Column({ nullable: true })
  tg_link?: string;
  
  @ApiProperty(
    {
      example:"Admin", 
      description:"Admin hashed password"
    }
  )
  @Column({ nullable: true })
  hashed_password?: string;

  @ApiProperty({
    example:"Admin", 
    description:"Admin hashed_refresh_token"
  })
  @Column({ nullable: true })
  hashed_refresh_token?: string;
  
  @ApiProperty({
    example:"Admin", 
    description:"Admin is_active"
  })
  @Column({ nullable: true })
  is_active?: boolean;
  
  @ApiProperty({
    example:"Admin", 
    description:"Admin is_creator"
  })
  @Column({ nullable: true })
  is_creator?: boolean;
  

  @ApiProperty({
    example:"Admin", 
    description:"Admin activation_link"
  })
  @Column({nullable:true})
  activation_link:string
 
}
