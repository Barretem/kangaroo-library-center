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
  ApiTags,
} from '@nestjs/swagger';

import { ErrorRes } from '../../common/classes/errorRes.classes';
import { ResKnowledgeType } from './classes/res-knowledge-type.class';
import { ResKnowledgeTypeList } from './classes/res-knowledge-type-list.class';
import { DeleteSuccessRes } from '../../common/classes/deleteSuccessRes.classes';
import { ResKnowledgeTypeTree } from './classes/res-knowledge-type-tree.class';

import { KnowledgeTypeService } from './knowledge-type.service';

import { CreateKnowledgeTypeDto } from './dto/create-knowledge-type.dto';
import { ChangeKnowledgeTypeDto } from './dto/change-knowledge-type.dto';

@ApiBearerAuth()
@ApiTags('knowledge-type')
@Controller('knowledge-type')
@UseInterceptors(ClassSerializerInterceptor)
export class KnowledgeTypeController {
  constructor(private readonly knowledgeTypeService: KnowledgeTypeService) {}

  @Post()
  @ApiOperation({
    summary: '创建知识',
    operationId: 'create',
  })
  @ApiResponse({
    status: 201,
    type: ResKnowledgeType,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async create(@Body() data: CreateKnowledgeTypeDto) {
    return this.knowledgeTypeService.create(data);
  }

  @Delete(':ids')
  @ApiOperation({
    summary: '删除知识分类',
    operationId: 'delete',
  })
  @ApiResponse({
    status: 200,
    type: DeleteSuccessRes,
  })
  async delete(@Param('ids') ids: string) {
    return this.knowledgeTypeService.deleteTypeByIds(ids);
  }

  @Put(':id')
  @ApiOperation({
    summary: '修改知识分类',
    operationId: 'change',
  })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeType,
  })
  async change(@Param('id') id: number, @Body() data: ChangeKnowledgeTypeDto) {
    return this.knowledgeTypeService.changeType(id, data);
  }

  @Get('getTree')
  @ApiOperation({
    summary: '获取知识分类列表树',
    operationId: 'getTree',
  })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeTypeTree,
  })
  async getTree() {
    return this.knowledgeTypeService.getWholeTree();
  }

  @Get(':id')
  @ApiOperation({
    summary: '根据ID获取知识分类',
    operationId: 'getOne',
  })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeType,
  })
  async getOne(@Param('id') id: number) {
    return this.knowledgeTypeService.findItem(id);
  }

  @Get()
  @ApiOperation({
    summary: '获取知识分类列表',
    operationId: 'getList',
  })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeTypeList,
  })
  async getList() {
    return this.knowledgeTypeService.findList();
  }

  @Get('getChildren')
  @ApiOperation({
    summary: '获取子知识分类列表 TODO',
    operationId: 'getChildren',
  })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeTypeList,
  })
  async getChildren(@Param('id') id: number) {
    return {};
  }

  @Get('getChildrenTree')
  @ApiOperation({
    summary: '获取子知识分类列表树 TODO',
    operationId: 'getChildrenTree',
  })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeTypeTree,
  })
  async getChildrenTree(@Param('id') id: number) {
    return {};
  }
}
