import { Module } from '@nestjs/common';
import { SoftskillService } from './softskill.service';
import { SoftskillController } from './softskill.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Softskill } from './entities/softskill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Softskill])],
  controllers: [SoftskillController],
  providers: [SoftskillService],
})
export class SoftskillModule {}
