import { IsEmail, MinLength, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export default class LoginByEmailDto {
  @ApiModelProperty({ required: true })
  @IsEmail()
  readonly email: string;

  @ApiModelProperty({ required: true, minLength: 6 })
  @IsString()
  @MinLength(6)
  readonly password: string;
}
