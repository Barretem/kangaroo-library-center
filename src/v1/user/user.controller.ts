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
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags,
} from '@nestjs/swagger';
import { UserService } from './user.service';
import { ResUser } from './classes/resUser.class';
import { ResUserList } from './classes/resUserList.class';
import { DeleteSuccessRes } from '../../common/classes/deleteSuccessRes.classes';
import { ErrorRes } from '../../common/classes/errorRes.classes';

import { UserEntity } from '../../common/entities/user.entity';

import { CreateUserDto } from './dto/create-user.dto';
import { ChangeUserInfoDto } from './dto/change-user-info.dto';
import { managerPass } from '../../common/utils/index';

@ApiBearerAuth()
@ApiUseTags('user')
@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard('jwt'))
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @ApiOperation({ title: '用户注册/创建用户', operationId: 'createOne' })
  @ApiResponse({
    status: 201,
    type: ResUser,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async createOne(@Body() data, @Request() req): Promise<UserEntity> {
    // 判断当前用户，只有管理员才能添加用户
    managerPass(req);
    const { userId } = req;
    return this.userService.create(data, userId);
  }

  @Delete(':ids')
  @ApiOperation({
    title: '单个/批量删除用户',
    description: '如果要删除多个用‘,’隔开',
    operationId: 'deleteUsers',
  })
  @ApiResponse({
    status: 200,
    type: DeleteSuccessRes,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async deleteUsers(@Param('ids') ids: string, @Request() req) {
    managerPass(req);

    return this.userService.deleteUserById(ids);
  }

  @Put(':id')
  @ApiOperation({
    title: '根据用户ID修改用户信息',
    operationId: 'changeUserInfo',
  })
  @ApiResponse({
    status: 200,
    type: ResUser,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async changeUserInfo(
    @Param('id') id: string,
    @Body() data: ChangeUserInfoDto,
    @Request() req,
  ) {
    const { userId } = req;
    return this.userService.changeUserInfo(
      {
        ...data,
        userId: id,
      },
      userId,
    );
  }

  @Get(':id')
  @ApiOperation({
    title: '根据用户ID获取用户信息',
    operationId: 'findOne',
  })
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
  @ApiOperation({
    title: '获取用户列表',
    operationId: 'findAll',
  })
  @ApiResponse({
    status: 200,
    type: ResUserList,
  })
  async findAll(): Promise<UserEntity[]> {
    return this.userService.findAll();
  }
}
