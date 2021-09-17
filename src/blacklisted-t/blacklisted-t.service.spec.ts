import { Test, TestingModule } from '@nestjs/testing';
import { BlacklistedTService } from './blacklisted-t.service';

describe('BlacklistedTService', () => {
  let service: BlacklistedTService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BlacklistedTService],
    }).compile();

    service = module.get<BlacklistedTService>(BlacklistedTService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
