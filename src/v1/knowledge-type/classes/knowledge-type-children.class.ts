import { ApiModelProperty } from '@nestjs/swagger';

import KnowledgeTypeClass from './knowledge-type.class';

export default class KnowledgeTypeChildrenClass extends KnowledgeTypeClass {
  constructor() {
    super();
  }

  @ApiModelProperty({ type: [KnowledgeTypeClass] })
  children: object;
}
