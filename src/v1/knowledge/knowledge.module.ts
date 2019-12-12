import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import KnowledgeController from './knowledge.controller';
import KnowledgeService from './knowledge.service';
import KnowledgeEntity from '../../common/entities/knowledge.entity';
import KnowledgeTypeEntity from '../../common/entities/knowledge-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KnowledgeEntity, KnowledgeTypeEntity])],
  controllers: [KnowledgeController],
  providers: [KnowledgeService],
})
export default class KnowledgeModule {}
