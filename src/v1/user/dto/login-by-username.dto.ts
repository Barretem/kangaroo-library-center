import { IsString, MinLength } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LoginByUsernameDto {
  @ApiModelProperty({ required: true })
  @IsString()
  readonly username: string;

  @ApiModelProperty({ required: true, minLength: 6 })
  @IsString()
  @MinLength(6)
  readonly password: string;
}
