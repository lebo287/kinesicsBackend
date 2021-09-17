import { Test, TestingModule } from '@nestjs/testing';
import { RequestedSignsController } from './requestedsigns.controller';

describe('RequestedSignsController', () => {
  let controller: RequestedSignsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RequestedSignsController],
    }).compile();

    controller = module.get<RequestedSignsController>(RequestedSignsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
