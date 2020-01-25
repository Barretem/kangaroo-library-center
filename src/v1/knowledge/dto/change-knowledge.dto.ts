import { IsString, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ChangeKnowledgeDto {
  @ApiProperty({ description: '知识点标题' })
  @IsString()
  title: string; // 知识

  @ApiProperty({ description: '知识点概述' })
  summary?: string; // 知识点概述

  @ApiProperty({ description: '知识点详情' })
  @IsString()
  detail?: string; // 知识点详情

  @ApiProperty({ description: '知识点提醒点' })
  @IsString()
  warning?: string; // 提醒

  @ApiProperty({ description: '关键字（多个关键字用,隔开）' })
  @IsString()
  keywords?: string; // 关键字

  @ApiProperty({ description: '知识分类ID' })
  @IsNumber()
  knowledgeTypeId?: number; // 分类类型

  @ApiProperty({ description: '更新用户的ID' })
  @IsString()
  updatedBy: string; // 创建用户的ID
}
