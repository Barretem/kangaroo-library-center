import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { ResUser } from './classes/resUser.class';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './classes/user.class';

@ApiBearerAuth()
@ApiUseTags('用户模块')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ title: '用户注册/创建用户' })
  @ApiResponse({
    status: 200,
    type: ResUser,
  })
  async createOne(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userService.create(createUserDto);
  }

  @Delete(':ids')
  @ApiOperation({ title: '单个/批量删除用户' })
  async deleteUsers(@Param('ids') ids: string) {
    return this.userService.findOne(ids);
  }

  @Put(':id')
  @ApiOperation({ title: '根据用户ID修改用户信息' })
  async changeUserInfo(@Param('id') id: string) {
    return this.userService.findOne(id);
  }

  @Get(':id')
  @ApiOperation({ title: '根据用户ID获取用户信息' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ResUser,
  })
  async findOne(@Param('id') id: string) {
    return this.userService.findOne(+id);
  }

  @Get()
  @ApiOperation({ title: '获取用户列表' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ResUser,
  })
  async findAll() {
    return this.userService.findOne(0);
  }

  @Get('/login')
  @ApiOperation({ title: '根据用户名密码登录' })
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: ResUser,
  })
  async login() {
    return this.userService.findOne(0);
  }
}
