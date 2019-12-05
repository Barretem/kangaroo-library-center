import { ApiModelProperty } from '@nestjs/swagger';

import Single from '../../../common/classes/single.classes';
import User from './user.class';

export default class ResUser extends Single {
  constructor() {
    super();
  }

  @ApiModelProperty({ type: User })
  payload: object;
}
