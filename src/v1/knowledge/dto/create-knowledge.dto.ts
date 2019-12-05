import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export default class CreateKnowledgeDto {
  @ApiModelProperty({ description: '知识点ID'})
  @IsNumber()
  id: number; // ID

  @ApiModelProperty({ description: '知识点标题' })
  @IsString()
  title: string; // 知识

  @ApiModelProperty({ description: '知识点概述' })
  summary?: string; // 知识点概述

  @ApiModelProperty({ description: '知识点详情' })
  @IsString()
  detail?: string; // 知识点详情

  @ApiModelProperty({ description: '知识点提醒点' })
  @IsString()
  warning?: string; // 提醒

  @ApiModelProperty({ description: '关键字（多个关键字用,隔开）' })
  @IsString()
  keywords?: string; // 关键字

  @ApiModelProperty({ description: '知识分类ID' })
  @IsNumber()
  knowledgeTypeId?: number; // 分类类型D

  @ApiModelProperty({ description: '创建用户的ID' })
  @IsString()
  createdBy: string; // 创建用户的ID
}
