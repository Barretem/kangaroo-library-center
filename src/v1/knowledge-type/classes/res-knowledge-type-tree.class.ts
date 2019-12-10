import { ApiModelProperty } from '@nestjs/swagger';

import Single from '../../../common/classes/single.classes';
import KnowledgeTypeChildrenClass from './knowledge-type-children.class';

export default class ResKnowledgeTypeTree extends Single {
  constructor() {
    super();
  }

  @ApiModelProperty({ type: [KnowledgeTypeChildrenClass] })
  payload: object;
}
