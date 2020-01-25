import { ApiProperty } from '@nestjs/swagger';

import { Single } from '../../../common/classes/single.classes';
import { UserEntity } from '../../../common/entities/user.entity';

export class ResUser extends Single {
  constructor() {
    super();
  }

  @ApiProperty({ type: UserEntity })
  payload: object;
}
