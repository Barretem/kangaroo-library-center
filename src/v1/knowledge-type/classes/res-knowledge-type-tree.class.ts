import { ApiProperty } from '@nestjs/swagger';

import { Single } from '../../../common/classes/single.classes';
import { KnowledgeTypeChildrenClass } from './knowledge-type-children.class';

export class ResKnowledgeTypeTree extends Single {
  constructor() {
    super();
  }

  @ApiProperty({ type: [KnowledgeTypeChildrenClass] })
  payload: object;
}
