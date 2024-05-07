import { PartialType } from '@nestjs/swagger';
import { CreateGroupTypeDto } from './create-group_type.dto';

export class UpdateGroupTypeDto extends PartialType(CreateGroupTypeDto) {}
