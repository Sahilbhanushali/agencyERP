import { Test, TestingModule } from '@nestjs/testing';
import { RootuserController } from './rootuser.controller';
import { RootuserService } from './rootuser.service';

describe('RootuserController', () => {
  let controller: RootuserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RootuserController],
      providers: [RootuserService],
    }).compile();

    controller = module.get<RootuserController>(RootuserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
