import { IsString, IsEmail } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

enum UserRole {
  ROOT = 'root',
  ADMIN = 'admin',
  GUEST = 'guest',
}

export class CreateUserDto {
  @ApiModelProperty({ required: true })
  @IsString()
  readonly username: string;

  @ApiModelProperty({ required: true })
  @IsString()
  @IsEmail()
  readonly email: string;

  @ApiModelProperty({ required: true, minLength: 6 })
  @IsString()
  readonly password: string;

  @ApiModelProperty({ enum: UserRole, default: UserRole.GUEST })
  @IsString()
  readonly role: UserRole;
}
