import { Test, TestingModule } from '@nestjs/testing';
import { SoftskillService } from './softskill.service';

describe('SoftskillService', () => {
  let service: SoftskillService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SoftskillService],
    }).compile();

    service = module.get<SoftskillService>(SoftskillService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
