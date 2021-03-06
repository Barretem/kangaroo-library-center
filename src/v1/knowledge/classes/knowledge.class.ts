import { ApiProperty } from '@nestjs/swagger';

export class KnowledgeClass {
  @ApiProperty({ example: 0, description: '知识点ID'})
  id: number; // ID

  @ApiProperty({ example: '我是标题', description: '知识点标题' })
  title: string; // 知识

  @ApiProperty({ example: '我是知识点概述', description: '知识点概述' })
  summary: string; // 知识点概述

  @ApiProperty({ example: '知识点详情', description: '知识点详情'})
  detail: string; // 知识点详情

  @ApiProperty({ example: '易错点提醒', description: '易错点提醒' })
  warning: string; // 提醒

  @ApiProperty({ example: '关键字1,关键字2', description: '关键字列表，多个关键字之间用英文逗号隔开'})
  keywords: string; // 关键字

  @ApiProperty({ example: '11', description: '知识点分类ID' })
  knowledgeTypeId: number; // 分类类型

  @ApiProperty({ example: '11', description: '最后更新用户的ID' })
  updatedBy: string; // 最后更新用户的ID

  @ApiProperty({ example: '11', description: '创建用户的ID' })
  createdBy: string; // 创建用户的ID

  @ApiProperty({ example: 'Wed Dec 04 2019 19:52:34 GMT+0800 (中国标准时间)', description: '创建时间' })
  createdTime: Date; // 创建时间

  @ApiProperty({ example: 'Wed Dec 04 2019 19:52:34 GMT+0800 (中国标准时间)', description: '更新时间' })
  updatedTime: Date; // 更新时间
}
