import { IsString, IsEmail } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

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

  @ApiModelProperty({ enum: ['root', 'admin', 'guest'], default: 'guest' })
  @IsString()
  readonly rule: string;
}
