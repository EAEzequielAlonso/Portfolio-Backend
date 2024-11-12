import { Test, TestingModule } from '@nestjs/testing';
import { SoftskillController } from './softskill.controller';
import { SoftskillService } from './softskill.service';

describe('SoftskillController', () => {
  let controller: SoftskillController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SoftskillController],
      providers: [SoftskillService],
    }).compile();

    controller = module.get<SoftskillController>(SoftskillController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
