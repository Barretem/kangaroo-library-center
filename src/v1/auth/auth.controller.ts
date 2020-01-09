import { Controller, Body, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ResUser } from '../user/classes/resUser.class';
import { ErrorRes } from '../../common/classes/errorRes.classes';
import { LoginByEmailDto } from '../user/dto/login-by-email.dto';
import { LoginByUsernameDto } from '../user/dto/login-by-username.dto';
import { UserEntity } from '../../common/entities/user.entity';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { ResLoginClass } from './classes/res-login.class';

import {
  ApiBearerAuth,
  ApiOperation,
  ApiUseTags,
  ApiResponse,
} from '@nestjs/swagger';

@ApiBearerAuth()
@ApiUseTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}
  @Post('loginByEmail')
  @ApiOperation({
    title: '根据用户邮箱登录',
    operationId: 'loginByEmail',
  })
  @ApiResponse({
    status: 201,
    type: ResLoginClass,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async loginByEmail(@Body() data: LoginByEmailDto): Promise<any> {
    const user = await this.userService.loginByEmail(data);
    return {
      ...user,
      accessToken: this.formateJwtData(user),
    };
  }

  @Post('loginByUsername')
  @ApiOperation({
    title: '根据用户名密码登录',
    operationId: 'loginByUsername',
  })
  @ApiResponse({
    status: 200,
    type: ResUser,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async loginByUsername(@Body() data: LoginByUsernameDto): Promise<any> {
    const user = await this.userService.loginByUsername(data);
    return {
      ...user,
      accessToken: this.formateJwtData(user),
    };
  }

  /**
   * 格式化jwt数据
   * @param userInfo object
   */
  private formateJwtData(userInfo) {
    const payload = {
      username: userInfo.username,
      userId: userInfo.userId,
      role: userInfo.role,
    };
    return this.jwtService.sign(payload);
  }
}
