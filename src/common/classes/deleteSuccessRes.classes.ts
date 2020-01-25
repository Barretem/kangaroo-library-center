import { ApiProperty } from '@nestjs/swagger';

export class DeleteSuccessRes {
  @ApiProperty({
    example: 0,
    description: '返回码，0: 成功；1: 失败',
    enum: [0, 1],
  })
  code: 0;

  @ApiProperty({
    example: 'success',
    description: '返回描述（成功为success, 失败为对应的描述）',
  })
  message: 'success';

  @ApiProperty({
    example: true,
    description: 'true: 操作成功；false: 操作失败',
  })
  payload: boolean;
}
