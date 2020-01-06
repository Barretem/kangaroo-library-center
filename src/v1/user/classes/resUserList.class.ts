import { ApiModelProperty } from '@nestjs/swagger';

import { Single } from '../../../common/classes/single.classes';
import { UserEntity } from '../../../common/entities/user.entity';

export class ResUserList extends Single {
  constructor() {
    super();
  }

  @ApiModelProperty({ type: [UserEntity] })
  payload: object;
}
