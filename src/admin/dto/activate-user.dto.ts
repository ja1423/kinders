 import { IsNotEmpty, IsString, IsUrl } from "class-validator";

 export class ActivateAdminDto {
   @IsNotEmpty()
   @IsString()
   @IsUrl() 
   link: string;
 }