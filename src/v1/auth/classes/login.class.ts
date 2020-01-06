import { UserEntity } from '../../../common/entities/user.entity';
import { ApiModelProperty } from '@nestjs/swagger';

export class LoginUserClass extends UserEntity {
  @ApiModelProperty({example: '', description: '登录token值，需要在请求头中带有该token'})
  accessToken: string;
}
