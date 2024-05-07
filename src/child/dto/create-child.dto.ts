import { IsString } from "class-validator";

export class CreateChildDto {
  @IsString()
  first_name: string;

  @IsString()
  last_name: string;

  @IsString()
  date_of_birth: string;

  @IsString()
  age: string;

  @IsString()
  gender: string;

  @IsString()
  photo: string;

  @IsString()
  metrika_photo: string;
}
