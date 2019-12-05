import { IsString, IsEmail, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

enum UserRole {
  ROOT = 'root',
  ADMIN = 'admin',
  GUEST = 'guest',
}

export default class ChangeUserInfoDto {
  readonly userId?: string;

  @ApiModelProperty()
  @IsString()
  readonly username: string;

  @ApiModelProperty()
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiModelProperty()
  @IsString()
  @MinLength(6)
  readonly password: string;

  @ApiModelProperty({ enum: UserRole })
  @IsString()
  readonly role: UserRole;
}
