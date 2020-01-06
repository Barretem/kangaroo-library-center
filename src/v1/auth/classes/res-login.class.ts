import { ApiModelProperty } from '@nestjs/swagger';

import { Single } from '../../../common/classes/single.classes';
import { LoginUserClass } from './login.class';

export class ResLoginClass extends Single {
  constructor() {
    super();
  }

  @ApiModelProperty({ type: [LoginUserClass] })
  payload: object;
}
