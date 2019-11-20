import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryColumn,
  Generated,
} from 'typeorm';

export enum UserRole {
  ROOT = 'root',
  ADMIN = 'admin',
  GUEST = 'guest',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number; // ID

  @Column()
  @Generated('uuid')
  userId: string;

  @Column({ length: 500, unique: true })
  username: string; // 用户名

  @PrimaryColumn({ length: 100, unique: true })
  email: string; // 用户邮箱

  @Column({ length: 500 })
  password: string; // 用户密码

  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.GUEST,
  })
  role: UserRole; // 用户权限

  @Column()
  isVerify: boolean; // 是否已经被验证

  @Column({ type: 'date' })
  outdateTime: Date; // 账号过期日期

  @CreateDateColumn()
  createdTime: Date; // 用户创建时间

  @UpdateDateColumn()
  updatedTime: Date; // 用户信息更新时间

  @Column({ default: false })
  isDeleted: boolean; // 用户是否被删除
}
