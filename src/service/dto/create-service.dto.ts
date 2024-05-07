import { IsString } from "class-validator";

export class CreateServiceDto {
  @IsString()
  name: string;

  @IsString()
  price: number;

  @IsString()
  description: string;
}
