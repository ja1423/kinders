import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAdminDto {
  @ApiProperty({
    example: "Admin",
    description: "Admin full_name",
  })
  @IsString()
  @IsNotEmpty()
  full_name: string;


  @ApiProperty({
    example: "Admin",
    description: "Admin phone_number",
  })
  @IsString()
  phone_number?: string;


  @ApiProperty({
    example: "Admin",
    description: "Admin email",
  })
  @IsEmail()
  email?: string;


  @ApiProperty({
    example: "Admin",
    description: "Admin password",
  })
  @IsString()
  password: string;

  tg_link?: string;

  hashed_password: string;

  @IsString()
  confirm_password: string;

  hashed_refresh_token: string;

  @IsBoolean()
  is_active: boolean;

  is_creator: boolean;

  activation_link: string;
}
