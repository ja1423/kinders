import { PartialType } from '@nestjs/swagger';
import { CreateGroupTypeMenuDto } from './create-group_type_menu.dto';

export class UpdateGroupTypeMenuDto extends PartialType(CreateGroupTypeMenuDto) {}
