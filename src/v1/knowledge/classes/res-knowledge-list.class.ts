import { ApiModelProperty } from '@nestjs/swagger';

import Single from '../../../common/classes/single.classes';
import KnowledgeClass from './knowledge.class';

export default class ResKnowledgeList extends Single {
  constructor() {
    super();
  }

  @ApiModelProperty({ type: [KnowledgeClass] })
  payload: object;
}
