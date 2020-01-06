import { ApiModelProperty } from '@nestjs/swagger';

export class DeleteSuccessRes {
  @ApiModelProperty({
    example: 0,
    description: '返回码，0: 成功；1: 失败',
    enum: [0, 1],
  })
  code: 0;

  @ApiModelProperty({
    example: 'success',
    description: '返回描述（成功为success, 失败为对应的描述）',
  })
  message: 'success';

  @ApiModelProperty({
    example: true,
    description: 'true: 操作成功；false: 操作失败',
  })
  payload: boolean;
}
