import { PartialType } from '@nestjs/swagger';
import { CreateKindergardenDto } from './create-kindergarden.dto';

export class UpdateKindergardenDto extends PartialType(CreateKindergardenDto) {}
