import { ApiModelProperty } from '@nestjs/swagger';

import { Single } from '../../../common/classes/single.classes';
import { KnowledgeEntity } from '../../../common/entities/knowledge.entity';

export class ResKnowledgeList extends Single {
  constructor() {
    super();
  }

  @ApiModelProperty({ type: [KnowledgeEntity] })
  payload: object;
}
