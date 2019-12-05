import { Test, TestingModule } from '@nestjs/testing';
import KnowledgeTypeController from './knowledge-type.controller';

describe('KnowledgeType Controller', () => {
  let controller: KnowledgeTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [KnowledgeTypeController],
    }).compile();

    controller = module.get<KnowledgeTypeController>(KnowledgeTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
