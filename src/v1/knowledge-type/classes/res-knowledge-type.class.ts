import { ApiModelProperty } from '@nestjs/swagger';

import Single from '../../../common/classes/single.classes';
import KnowledgeTypeClass from './knowledge-type.class';

export default class ResKnowledgeType extends Single {
  constructor() {
    super();
  }

  @ApiModelProperty({ type: KnowledgeTypeClass })
  payload: object;
}
