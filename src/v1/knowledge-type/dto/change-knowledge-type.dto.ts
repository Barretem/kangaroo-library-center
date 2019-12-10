import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export default class ChangeKnowledgeTypeDto {
  @ApiModelProperty({ description: '分类名称'})
  @IsString()
  readonly typeName: string;

  @ApiModelPropertyOptional({ description: '分类描述' })
  @IsString()
  readonly description?: string;

  @ApiModelProperty({ description: '创建人ID' })
  @IsString()
  readonly updatedBy: string;

  @ApiModelPropertyOptional({ description: '父ID' })
  @IsNumber()
  readonly parentId?: number;
}
