import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoftskillService } from './softskill.service';
import { CreateSoftskillDto } from './dto/create-softskill.dto';
import { UpdateSoftskillDto } from './dto/update-softskill.dto';

@Controller('softskill')
export class SoftskillController {
  constructor(private readonly softskillService: SoftskillService) {}

  @Post()
  create(@Body() createSoftskillDto: CreateSoftskillDto) {
    return this.softskillService.create(createSoftskillDto);
  }

  @Get()
  findAll() {
    return this.softskillService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.softskillService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoftskillDto: UpdateSoftskillDto) {
    return this.softskillService.update(+id, updateSoftskillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.softskillService.remove(+id);
  }
}
