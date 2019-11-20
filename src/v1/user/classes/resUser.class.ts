import { ApiModelProperty } from '@nestjs/swagger';

import { Single } from '../../../common/classes/single.classes';
import { CreateUser } from './createUser.class';

export class ResUser extends Single {
  constructor() {
    super();
  }

  @ApiModelProperty({ type: CreateUser })
  payload: object;
}
