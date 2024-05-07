import { IsString } from "class-validator";

export class CreateParentDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  date_of_birth: string;

  @IsString()
  age: string;

  @IsString()
  phone_number: string;

  @IsString()
  email: string;

  @IsString()
  tg_link: string;

  @IsString()
  passport_seria: string;

  @IsString()
  passport_number: string;

  @IsString()
  passport_photo: string;
}
