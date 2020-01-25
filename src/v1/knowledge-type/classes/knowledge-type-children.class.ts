import { ApiProperty } from '@nestjs/swagger';

import { KnowledgeTypeEntity } from '../../../common/entities/knowledge-type.entity';

export class KnowledgeTypeChildrenClass extends KnowledgeTypeEntity {
  @ApiProperty({ type: [KnowledgeTypeEntity] })
  children: object;
}
