import { IsString } from "class-validator";

export class CreateDirectorDto {
  @IsString()
  full_name: string;

  @IsString()
  phone_number?: string;

  @IsString()
  tg_link?: string;

  @IsString()
  email?: string;
}
