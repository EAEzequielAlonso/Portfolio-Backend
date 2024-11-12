import { Test, TestingModule } from '@nestjs/testing';
import { LenguageService } from './lenguage.service';

describe('LenguageService', () => {
  let service: LenguageService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LenguageService],
    }).compile();

    service = module.get<LenguageService>(LenguageService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
