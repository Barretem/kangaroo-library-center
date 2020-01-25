import { ApiProperty } from '@nestjs/swagger';

import { Single } from '../../../common/classes/single.classes';
import { KnowledgeTypeEntity } from '../../../common/entities/knowledge-type.entity';

export class ResKnowledgeType extends Single {
  constructor() {
    super();
  }

  @ApiProperty({ type: KnowledgeTypeEntity })
  payload: object;
}
