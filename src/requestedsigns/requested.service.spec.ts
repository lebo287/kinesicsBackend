import { Test, TestingModule } from '@nestjs/testing';
import { RequestedService } from './requested.service';

describe('RequestedService', () => {
  let service: RequestedService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RequestedService],
    }).compile();

    service = module.get<RequestedService>(RequestedService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
