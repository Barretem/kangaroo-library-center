import { ApiModelProperty } from '@nestjs/swagger';

export class KnowledgeClass {
  @ApiModelProperty({ example: 0, description: '知识点ID'})
  id: number; // ID

  @ApiModelProperty({ example: '我是标题', description: '知识点标题' })
  title: string; // 知识

  @ApiModelProperty({ example: '我是知识点概述', description: '知识点概述' })
  summary: string; // 知识点概述

  @ApiModelProperty({ example: '知识点详情', description: '知识点详情'})
  detail: string; // 知识点详情

  @ApiModelProperty({ example: '易错点提醒', description: '易错点提醒' })
  warning: string; // 提醒

  @ApiModelProperty({ example: '关键字1,关键字2', description: '关键字列表，多个关键字之间用英文逗号隔开'})
  keywords: string; // 关键字

  @ApiModelProperty({ example: '11', description: '知识点分类ID' })
  knowledgeTypeId: number; // 分类类型

  @ApiModelProperty({ example: '11', description: '最后更新用户的ID' })
  updatedBy: string; // 最后更新用户的ID

  @ApiModelProperty({ example: '11', description: '创建用户的ID' })
  createdBy: string; // 创建用户的ID

  @ApiModelProperty({ example: 'Wed Dec 04 2019 19:52:34 GMT+0800 (中国标准时间)', description: '创建时间' })
  createdTime: Date; // 创建时间

  @ApiModelProperty({ example: 'Wed Dec 04 2019 19:52:34 GMT+0800 (中国标准时间)', description: '更新时间' })
  updatedTime: Date; // 更新时间
}
