import { UserEntity } from '../../../common/entities/user.entity';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserClass extends UserEntity {
  @ApiProperty({example: '', description: '登录token值，需要在请求头中带有该token'})
  accessToken: string;
}
