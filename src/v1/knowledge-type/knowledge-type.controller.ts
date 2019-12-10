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

import ErrorRes from '../../common/classes/errorRes.classes';
import ResKnowledgeType from './classes/res-knowledge-type.class';
import ResKnowledgeTypeList from './classes/res-knowledge-type-list.class';
import DeleteSuccessRes from '../../common/classes/deleteSuccessRes.classes';
import ResKnowledgeTypeTree from './classes/res-knowledge-type-tree.class';

import KnowledgeTypeService from './knowledge-type.service';

import CreateDto from './dto/create-knowledge-type.dto';
import ChangeDto from './dto/change-knowledge-type.dto';

@ApiBearerAuth()
@ApiUseTags('知识分类模块')
@Controller('knowledge-type')
@UseInterceptors(ClassSerializerInterceptor)
export default class KnowledgeTypeController {
  constructor(private readonly knowledgeTypeService: KnowledgeTypeService) {}

  @Post()
  @ApiOperation({ title: '创建知识' })
  @ApiResponse({
    status: 201,
    type: ResKnowledgeType,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async create(@Body() data: CreateDto) {
    return this.knowledgeTypeService.create(data);
  }

  @Delete(':ids')
  @ApiOperation({ title: '删除知识分类' })
  @ApiResponse({
    status: 200,
    type: DeleteSuccessRes,
  })
  async delete(@Param('ids') ids: string) {
    return this.knowledgeTypeService.deleteTypeByIds(ids);
  }

  @Put(':id')
  @ApiOperation({ title: '修改知识分类' })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeType,
  })
  async change(@Param('id') id: number, @Body() data: ChangeDto) {
    return this.knowledgeTypeService.changeType(id, data);
  }

  @Get('getTree')
  @ApiOperation({ title: '获取知识分类列表树' })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeTypeTree,
  })
  async getTree() {
    return this.knowledgeTypeService.getWholeTree();
  }

  @Get(':id')
  @ApiOperation({ title: '根据ID获取知识分类' })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeType,
  })
  async getOne(@Param('id') id: number) {
    return this.knowledgeTypeService.findItem(id);
  }

  @Get()
  @ApiOperation({ title: '获取知识分类列表' })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeTypeList,
  })
  async getList() {
    return this.knowledgeTypeService.findList();
  }

  @Get('getChildren')
  @ApiOperation({ title: '获取子知识分类列表 TODO' })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeTypeList,
  })
  async getChildren(@Param('id') id: number) {
    return {};
  }

  @Get('getChildrenTree')
  @ApiOperation({ title: '获取子知识分类列表树 TODO' })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeTypeTree,
  })
  async getChildrenTree(@Param('id') id: number) {
    return {};
  }
}
