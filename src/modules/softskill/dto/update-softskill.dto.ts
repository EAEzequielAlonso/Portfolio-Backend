import { PartialType } from '@nestjs/mapped-types';
import { CreateSoftskillDto } from './create-softskill.dto';

export class UpdateSoftskillDto extends PartialType(CreateSoftskillDto) {}
