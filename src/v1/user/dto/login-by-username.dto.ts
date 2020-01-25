import { IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginByUsernameDto {
  @ApiProperty({ required: true })
  @IsString()
  readonly username: string;

  @ApiProperty({ required: true, minLength: 6 })
  @IsString()
  @MinLength(6)
  readonly password: string;
}
