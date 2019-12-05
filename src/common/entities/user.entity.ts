import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

enum UserRole {
  ROOT = 'root',
  ADMIN = 'admin',
  GUEST = 'guest',
}

@Entity()
export default class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: string; // ID

  @Column({ length: 500, unique: true })
  username: string; // 用户名

  @Column({ length: 100, unique: true })
  email: string; // 用户邮箱

  @Exclude()
  @Column({ length: 500 })
  password: string; // 用户密码

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.GUEST,
  })
  role: UserRole; // 用户权限

  @Column({
    default: false,
  })
  isVerify: boolean; // 是否已经被验证

  @CreateDateColumn()
  createdTime: Date; // 用户创建时间

  @UpdateDateColumn()
  updatedTime: Date; // 用户信息更新时间

  @Exclude()
  @Column({ default: false })
  isDeleted: boolean; // 用户是否被删除

  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }
}
