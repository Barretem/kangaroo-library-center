import { ApiProperty } from '@nestjs/swagger';

import { Single } from '../../../common/classes/single.classes';
import { LoginUserClass } from './login.class';

export class ResLoginClass extends Single {
  constructor() {
    super();
  }

  @ApiProperty({ type: [LoginUserClass] })
  payload: object;
}
