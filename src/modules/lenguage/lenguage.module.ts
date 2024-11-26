import { Module } from '@nestjs/common';
import { LenguageService } from './lenguage.service';
import { LenguageController } from './lenguage.controller';
import { Lenguage } from './entities/lenguage.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Lenguage])],
  controllers: [LenguageController],
  providers: [LenguageService],
})
export class LenguageModule {}
