import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export default class Knowledge {
  @PrimaryGeneratedColumn()
  id: number; // ID

  @Column({ length: 500, unique: true })
  title: string; // 知识

  @Column({
    length: 500,
  })
  summary: string; // 知识点概述

  @Column()
  detail: string; // 知识点详情

  @Column()
  warning: string; // 提醒

  @Column()
  keywords: string; // 关键字

  @Column()
  knowledgeTypeId: number; // 分类类型

  @Column({ length: 500 })
  updatedBy: string; // 创建用户的ID

  @Column({ length: 500 })
  createdBy: string; // 创建用户的ID

  @CreateDateColumn()
  createdTime: Date; // 创建时间

  @UpdateDateColumn()
  updatedTime: Date; // 更新时间

  constructor(partial: Partial<Knowledge>) {
    Object.assign(this, partial);
  }
}
