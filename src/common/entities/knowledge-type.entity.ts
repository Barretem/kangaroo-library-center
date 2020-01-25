import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('knowledge_type')
export class KnowledgeTypeEntity {
  @ApiProperty({ example: 0, description: '知识类ID' })
  @PrimaryGeneratedColumn()
  id: number; // ID

  @ApiProperty({ example: 'nodeJS', description: '知识类名' })
  @Column({ length: 500, unique: true })
  typeName: string; // 知识类型名

  @ApiProperty({
    example: '我是描述',
    description: '分类描述',
  })
  @Column({ length: 500 })
  description: string; // 分类描述

  @ApiProperty({ example: -1, description: '父ID，根节点父节点ID为-1' })
  @Column({
    default: -1,
  })
  parentId: number; // 父知识点ID

  @ApiProperty({
    example: '/1/2/3',
    description: '类型树路径，用/隔开',
  })
  @Column({ length: 500 })
  path: string; // 树路径，用/隔开

  @ApiProperty({
    example: '3d5784f6-9749-4939-bcce-3176d0433ad1',
    description: '创建用户的ID',
  })
  @Column({ length: 500 })
  createdBy: string; // 创建用户的ID

  @ApiProperty({
    example: '3d5784f6-9749-4939-bcce-3176d0433ad1',
    description: '更新用户的ID',
  })
  @Column({ length: 500 })
  updatedBy: string; // 更新用户的ID

  @ApiProperty({
    example: 'Mon Jan 06 2020 15:18:41 GMT+0800 (中国标准时间)',
    description: '创建时间',
  })
  @CreateDateColumn()
  createdTime: Date; // 创建时间

  @ApiProperty({
    example: 'Mon Jan 06 2020 15:18:41 GMT+0800 (中国标准时间)',
    description: '更新时间',
  })
  @UpdateDateColumn()
  updatedTime: Date; // 更新时间

  constructor(partial: Partial<KnowledgeTypeEntity>) {
    Object.assign(this, partial);
  }
}
