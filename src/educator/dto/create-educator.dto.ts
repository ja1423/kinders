import { IsString } from "class-validator";

export class CreateEducatorDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  email: string;

  @IsString()
  date_of_birth: string;

  @IsString()
  phone_number: string;

  @IsString()
  degree: string;

  @IsString()
  expression: string;

  @IsString()
  diplom: string;
}
