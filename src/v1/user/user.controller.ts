import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Put,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags,
} from '@nestjs/swagger';
import UserService from './user.service';
import ResUser from './classes/resUser.class';
import ResUserList from './classes/resUserList.class';
import DeleteSuccessRes from '../../common/classes/deleteSuccessRes.classes';
import ErrorRes from '../../common/classes/errorRes.classes';

import UserEntity from '../../common/entities/user.entity';

import CreateUserDto from './dto/create-user.dto';
import ChangeUserInfoDto from './dto/change-user-info.dto';
import LoginByEmailDto from './dto/login-by-email.dto';
import LoginByUsernameDto from './dto/login-by-username.dto';

@ApiBearerAuth()
@ApiUseTags('用户模块')
@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
export default class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ title: '用户注册/创建用户' })
  @ApiResponse({
    status: 201,
    type: ResUser,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async createOne(@Body() data: CreateUserDto): Promise<UserEntity> {
    return this.userService.create(data);
  }

  @Delete(':ids')
  @ApiOperation({ title: '单个/批量删除用户', description: '如果要删除多个用‘,’隔开' })
  @ApiResponse({
    status: 200,
    type: DeleteSuccessRes,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async deleteUsers(@Param('ids') ids: string) {
    return this.userService.deleteUserById(ids);
  }

  @Put(':id')
  @ApiOperation({ title: '根据用户ID修改用户信息' })
  @ApiResponse({
    status: 200,
    type: ResUser,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async changeUserInfo(@Param('id') id: string, @Body() data: ChangeUserInfoDto) {
    return this.userService.changeUserInfo({
      ...data,
      userId: id,
    });
  }

  @Get(':id')
  @ApiOperation({ title: '根据用户ID获取用户信息' })
  @ApiResponse({
    status: 200,
    type: ResUser,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async findOne(@Param('id') id: string) {
    return this.userService.findUserById(id);
  }

  @Get()
  @ApiOperation({ title: '获取用户列表' })
  @ApiResponse({
    status: 200,
    type: ResUserList,
  })
  async findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }

  @Post('loginByEmail')
  @ApiOperation({ title: '根据用户名密码登录' })
  @ApiResponse({
    status: 201,
    type: ResUser,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async loginByEmail(@Body() data: LoginByEmailDto): Promise<UserEntity> {
    return this.userService.loginByEmail(data);
  }

  @Post('loginByUsername')
  @ApiOperation({ title: '根据用户邮箱登录' })
  @ApiResponse({
    status: 200,
    type: ResUser,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async loginByUsername(@Body() data: LoginByUsernameDto): Promise<UserEntity> {
    return this.userService.loginByUsername(data);
  }
}
