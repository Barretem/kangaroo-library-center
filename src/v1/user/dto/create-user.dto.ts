import { IsString, IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

enum UserRole {
  ROOT = 'root',
  ADMIN = 'admin',
  GUEST = 'guest',
}

export class CreateUserDto {
  @ApiProperty({ required: true, description: '用户名' })
  @IsString()
  readonly username: string;

  @ApiProperty({ required: true, description: '用户邮箱' })
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiProperty({ required: true, minLength: 6, description: '用户密码，不少于6位' })
  @IsString()
  @MinLength(6)
  readonly password: string;

  @ApiProperty({ enum: UserRole, default: UserRole.GUEST, description: '用户角色' })
  @IsString()
  readonly role: UserRole;
}
