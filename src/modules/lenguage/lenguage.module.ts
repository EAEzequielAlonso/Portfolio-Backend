import { Module } from '@nestjs/common';
import { LenguageService } from './lenguage.service';
import { LenguageController } from './lenguage.controller';

@Module({
  controllers: [LenguageController],
  providers: [LenguageService],
})
export class LenguageModule {}
