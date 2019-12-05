import { ApiModelProperty } from '@nestjs/swagger';

export default class User {
  @ApiModelProperty({ example: '3d5784f6-9749-4939-bcce-3176d0433ad1', description: '用户ID' })
  userId: string;

  @ApiModelProperty({ example: '张三', description: '用户名' })
  username: string;

  @ApiModelProperty({ example: '123@qq.com', description: '用户邮箱' })
  email: string;

  @ApiModelProperty({
    example: 'guest',
    description: '用户权限',
  })
  role: string;
}
