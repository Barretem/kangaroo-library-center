import { ApiProperty } from '@nestjs/swagger';

export class Single {
  @ApiProperty({
    example: 0,
    description: '返回码，0: 失败；1: 成功',
    enum: [0, 1],
  })
  code: 0;

  @ApiProperty({
    example: 'success',
    description: '返回描述（成功为success, 失败为对应的描述）',
  })
  message: 'success';
}
