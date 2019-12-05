import { Test, TestingModule } from '@nestjs/testing';
import KnowledgeTypeService from './knowledge-type.service';

describe('KnowledgeTypeService', () => {
  let service: KnowledgeTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KnowledgeTypeService],
    }).compile();

    service = module.get<KnowledgeTypeService>(KnowledgeTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
