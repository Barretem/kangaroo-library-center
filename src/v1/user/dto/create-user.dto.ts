import { IsString, IsEmail, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

enum UserRole {
  ROOT = 'root',
  ADMIN = 'admin',
  GUEST = 'guest',
}

export class CreateUserDto {
  @ApiModelProperty({ required: true, description: '用户名' })
  @IsString()
  readonly username: string;

  @ApiModelProperty({ required: true, description: '用户邮箱' })
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiModelProperty({ required: true, minLength: 6, description: '用户密码，不少于6位' })
  @IsString()
  @MinLength(6)
  readonly password: string;

  @ApiModelProperty({ enum: UserRole, default: UserRole.GUEST, description: '用户角色' })
  @IsString()
  readonly role: UserRole;
}
