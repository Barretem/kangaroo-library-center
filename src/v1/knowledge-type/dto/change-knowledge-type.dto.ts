import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty, ApiModelPropertyOptional } from '@nestjs/swagger';

export default class ChangeKnowledgeTypeDto {
  @ApiModelProperty()
  @IsString()
  readonly id: number;

  @ApiModelProperty()
  @IsString()
  readonly typeName: string;

  @ApiModelProperty({ description: '' })
  @IsString()
  readonly updatedBy: string;

  @ApiModelPropertyOptional({ description: '父ID' })
  @IsNumber()
  readonly parentId?: number;
}
