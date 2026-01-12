import { Test, TestingModule } from '@nestjs/testing';
import { RootuserService } from './rootuser.service';

describe('RootuserService', () => {
  let service: RootuserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RootuserService],
    }).compile();

    service = module.get<RootuserService>(RootuserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
