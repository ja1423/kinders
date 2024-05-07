import { IsString } from "class-validator";

export class CreateKindergardenDto {
  @IsString()
  name: string;

  @IsString()
  address: string;

  @IsString()
  location: string;

  @IsString()
  call_center: string;

  @IsString()
  link: string;

  @IsString()
  email: string;
}
