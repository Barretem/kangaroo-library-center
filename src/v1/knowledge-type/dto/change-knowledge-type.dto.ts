import { IsString, IsNumber } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ChangeKnowledgeTypeDto {
  @ApiProperty({ description: '分类名称'})
  @IsString()
  readonly typeName: string;

  @ApiPropertyOptional({ description: '分类描述' })
  @IsString()
  readonly description?: string;

  @ApiProperty({ description: '创建人ID' })
  @IsString()
  readonly updatedBy: string;

  @ApiPropertyOptional({ description: '父ID' })
  @IsNumber()
  readonly parentId?: number;
}
