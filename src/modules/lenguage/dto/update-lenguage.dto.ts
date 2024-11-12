import { PartialType } from '@nestjs/mapped-types';
import { CreateLenguageDto } from './create-lenguage.dto';

export class UpdateLenguageDto extends PartialType(CreateLenguageDto) {}
