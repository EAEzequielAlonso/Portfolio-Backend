import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LenguageService } from './lenguage.service';
import { CreateLenguageDto } from './dto/create-lenguage.dto';
import { UpdateLenguageDto } from './dto/update-lenguage.dto';

@Controller('lenguage')
export class LenguageController {
  constructor(private readonly lenguageService: LenguageService) {}

  @Post()
  create(@Body() createLenguageDto: CreateLenguageDto) {
    return this.lenguageService.create(createLenguageDto);
  }

  @Get()
  findAll() {
    return this.lenguageService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.lenguageService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLenguageDto: UpdateLenguageDto) {
    return this.lenguageService.update(+id, updateLenguageDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.lenguageService.remove(+id);
  }
}
