import { ApiModelProperty } from '@nestjs/swagger';

export class User {
  @ApiModelProperty({ example: '张三', description: '用户名' })
  username: string;

  @ApiModelProperty({ example: '123@qq.com', description: '用户邮箱' })
  email: string;

  @ApiModelProperty({
    example: 'abcd1234__',
    description: '用户密码',
  })
  password: string;

  @ApiModelProperty({
    example: 'guest',
    description: '用户权限',
  })
  rule: string;
}
