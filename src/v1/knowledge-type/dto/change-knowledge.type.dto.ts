import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export default class ChangeKnowledgeTypeDto {
  @ApiModelProperty()
  @IsString()
  readonly typeName: string;

  @ApiModelProperty()
  @IsString()
  readonly updatedBy: string;

  @ApiModelProperty()
  @IsNumber()
  readonly parentId?: number;
}
