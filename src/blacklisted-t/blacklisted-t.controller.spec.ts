import { Test, TestingModule } from '@nestjs/testing';
import { BlacklistedTController } from './blacklisted-t.controller';

describe('BlacklistedTController', () => {
  let controller: BlacklistedTController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BlacklistedTController],
    }).compile();

    controller = module.get<BlacklistedTController>(BlacklistedTController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
