import { ApiModelProperty } from '@nestjs/swagger';

import { Single } from '../../../common/classes/single.classes';
import { KnowledgeTypeEntity } from '../../../common/entities/knowledge-type.entity';

export class ResKnowledgeType extends Single {
  constructor() {
    super();
  }

  @ApiModelProperty({ type: KnowledgeTypeEntity })
  payload: object;
}
