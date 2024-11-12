import { Injectable } from '@nestjs/common';
import { CreateSoftskillDto } from './dto/create-softskill.dto';
import { UpdateSoftskillDto } from './dto/update-softskill.dto';

@Injectable()
export class SoftskillService {
  create(createSoftskillDto: CreateSoftskillDto) {
    return 'This action adds a new softskill';
  }

  findAll() {
    return `This action returns all softskill`;
  }

  findOne(id: number) {
    return `This action returns a #${id} softskill`;
  }

  update(id: number, updateSoftskillDto: UpdateSoftskillDto) {
    return `This action updates a #${id} softskill`;
  }

  remove(id: number) {
    return `This action removes a #${id} softskill`;
  }
}
