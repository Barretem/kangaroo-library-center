import { IsString, IsNumber } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export default class CreateKnowledgeTypeDto {
  @ApiModelProperty()
  @IsString()
  readonly typeName: string;

  @ApiModelProperty()
  @IsString()
  readonly createdBy: string;

  @ApiModelProperty()
  @IsNumber()
  readonly parentId?: number;
}
