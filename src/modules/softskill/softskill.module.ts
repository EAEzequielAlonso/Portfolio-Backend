import { Module } from '@nestjs/common';
import { SoftskillService } from './softskill.service';
import { SoftskillController } from './softskill.controller';

@Module({
  controllers: [SoftskillController],
  providers: [SoftskillService],
})
export class SoftskillModule {}
