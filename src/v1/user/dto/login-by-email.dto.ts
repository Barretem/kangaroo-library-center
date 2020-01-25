import { IsEmail, MinLength, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginByEmailDto {
  @ApiProperty({ required: true })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ required: true, minLength: 6 })
  @IsString()
  @MinLength(6)
  readonly password: string;
}
