import { IsString } from "class-validator";

export class CreateMenuDto {
  @IsString()
  meals: string;

  @IsString()
  volumes: string;

  @IsString()
  photo: string;

  @IsString()
  description: string;
}
