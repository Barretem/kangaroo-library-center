import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

enum UserRole {
  ROOT = 'root',
  ADMIN = 'admin',
  GUEST = 'guest',
}

@Entity('user')
export class UserEntity {
  @ApiProperty({
    example: '3d5784f6-9749-4939-bcce-3176d0433ad1',
    description: '用户ID',
  })
  @PrimaryGeneratedColumn('uuid')
  userId: string; // ID

  @ApiProperty({ example: '张三', description: '用户名' })
  @Column({ length: 500, unique: true })
  username: string; // 用户名

  @ApiProperty({ example: '123@qq.com', description: '用户邮箱' })
  @Column({ length: 100, unique: true })
  email: string; // 用户邮箱

  @Exclude()
  @Column({ length: 500 })
  password: string; // 用户密码

  @ApiProperty({
    example: 'guest',
    description: '用户权限：root,admin,guest',
  })
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.GUEST,
  })
  role: UserRole; // 用户权限

  @ApiProperty({
    example: false,
    description: '用户邮箱是否已经被验证：true：已经被验证，false:还没被验证',
  })
  @Column({
    default: false,
  })
  isVerify: boolean; // 用户邮箱是否已经被验证

  @Exclude()
  @CreateDateColumn()
  createdTime: Date; // 用户创建时间

  @Exclude()
  @UpdateDateColumn()
  updatedTime: Date; // 用户信息更新时间

  @Exclude()
  @Column({ default: false })
  isDeleted: boolean; // 用户是否被删除

  @Exclude()
  @Column({ default: false })
  isActive: boolean; // 用户是否被删除

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
