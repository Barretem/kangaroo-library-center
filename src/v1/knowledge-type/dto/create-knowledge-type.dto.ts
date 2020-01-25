import { IsString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateKnowledgeTypeDto {
  @ApiProperty({ description: '分类名称' })
  @IsString()
  readonly typeName: string;

  @ApiProperty()
  @IsString()
  readonly createdBy: string;

  @ApiPropertyOptional({ description: '分类描述' })
  @IsString()
  readonly description?: string;

  @ApiPropertyOptional()
  @IsNumber()
  readonly parentId?: number;
}
