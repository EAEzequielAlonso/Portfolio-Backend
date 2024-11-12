import { Test, TestingModule } from '@nestjs/testing';
import { LenguageController } from './lenguage.controller';
import { LenguageService } from './lenguage.service';

describe('LenguageController', () => {
  let controller: LenguageController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LenguageController],
      providers: [LenguageService],
    }).compile();

    controller = module.get<LenguageController>(LenguageController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
