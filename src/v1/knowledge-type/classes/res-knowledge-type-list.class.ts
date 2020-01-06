import { ApiModelProperty } from '@nestjs/swagger';

import { Single } from '../../../common/classes/single.classes';
import { KnowledgeTypeEntity } from '../../../common/entities/knowledge-type.entity';

export class ResKnowledgeTypeList extends Single {
  constructor() {
    super();
  }

  @ApiModelProperty({ type: [KnowledgeTypeEntity] })
  payload: object;
}
