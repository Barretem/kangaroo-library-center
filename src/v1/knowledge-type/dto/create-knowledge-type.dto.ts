import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export default class CreateKnowledgeTypeDto {
  @ApiModelProperty({ description: '分类名称' })
  @IsString()
  readonly typeName: string;

  @ApiModelProperty()
  @IsString()
  readonly createdBy: string;

  @ApiModelPropertyOptional({ description: '分类描述' })
  @IsString()
  readonly description?: string;

  @ApiModelPropertyOptional()
  @IsNumber()
  readonly parentId?: number;
}
