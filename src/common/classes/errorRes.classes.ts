import { ApiProperty } from '@nestjs/swagger';

export class ErrorRes {
  @ApiProperty({
    example: 1,
    description: '返回码，0: 成功 1: 失败',
    enum: [0, 1],
  })
  code: number;

  @ApiProperty({
    example: 'fail',
    description: '返回描述（成功为success, 失败为fail）',
  })
  message: string;

  @ApiProperty({
    example: '返回的错误信息，为字符串时为错误描述；为数组或对象时为错误详情',
    description: '返回的错误信息，为字符串时为错误描述；为数组或对象时为错误详情',
  })
  payload: string | object;

  @ApiProperty({
    example: '/user',
    description: '请求的URL路径',
  })
  url: string;
}
