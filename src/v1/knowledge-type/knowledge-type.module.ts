import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { KnowledgeTypeController } from './knowledge-type.controller';
import { KnowledgeTypeService } from './knowledge-type.service';
import { KnowledgeTypeEntity } from '../../common/entities/knowledge-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([KnowledgeTypeEntity])],
  controllers: [KnowledgeTypeController],
  providers: [KnowledgeTypeService],
})
export class KnowledgeTypeModule {}
