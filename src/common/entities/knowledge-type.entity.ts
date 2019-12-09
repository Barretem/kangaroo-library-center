import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class KnowledgeType {
  @PrimaryGeneratedColumn()
  id: number; // ID

  @Column({ length: 500, unique: true })
  typeName: string; // 知识类型名

  @Column({ length: 500 })
  description: string; // 分类描述

  @Column({
    default: -1,
  })
  parentId: number; // 父知识点ID

  @Column({ length: 500 })
  path: string; // 树路径，用/隔开

  @Column({ length: 500 })
  createdBy: string; // 创建用户的ID

  @CreateDateColumn()
  createdTime: Date; // 创建时间

  @UpdateDateColumn()
  updatedTime: Date; // 更新时间

  constructor(partial: Partial<KnowledgeType>) {
    Object.assign(this, partial);
  }
}
