import { Injectable } from '@nestjs/common';
import { CreateLenguageDto } from './dto/create-lenguage.dto';
import { UpdateLenguageDto } from './dto/update-lenguage.dto';

@Injectable()
export class LenguageService {
  create(createLenguageDto: CreateLenguageDto) {
    return 'This action adds a new lenguage';
  }

  findAll() {
    return `This action returns all lenguage`;
  }

  findOne(id: number) {
    return `This action returns a #${id} lenguage`;
  }

  update(id: number, updateLenguageDto: UpdateLenguageDto) {
    return `This action updates a #${id} lenguage`;
  }

  remove(id: number) {
    return `This action removes a #${id} lenguage`;
  }
}
