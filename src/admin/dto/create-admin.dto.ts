import { IsBoolean, IsEmail, IsNotEmpty, IsString } from "class-validator";

export class CreateAdminDto {
  @IsString()
  @IsNotEmpty()
  full_name: string;

  @IsString()
  phone_number?: string;

  @IsEmail()
  email?: string;

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
