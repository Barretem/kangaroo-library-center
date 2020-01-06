import { ApiModelProperty } from '@nestjs/swagger';

import { KnowledgeTypeEntity } from '../../../common/entities/knowledge-type.entity';

export class KnowledgeTypeChildrenClass extends KnowledgeTypeEntity {
  @ApiModelProperty({ type: [KnowledgeTypeEntity] })
  children: object;
}
