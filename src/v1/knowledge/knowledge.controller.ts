import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  Body,
} from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiUseTags,
} from '@nestjs/swagger';

import KnowledgeService from './knowledge.service';
import ResKnowledgeType from './classes/res-knowledge.class';
import ErrorRes from '../../common/classes/errorRes.classes';
import DeleteSuccessRes from '../../common/classes/deleteSuccessRes.classes';
import ResKnowledge from './classes/res-knowledge.class';
import ResKnowledgeList from './classes/res-knowledge-list.class';

import CreateKnowledgeDto from './dto/create-knowledge.dto';
import ChangeKnowledgeDto from './dto/change-knowledge.dto';

@ApiBearerAuth()
@ApiUseTags('知识点模块')
@Controller('knowledge')
@UseInterceptors(ClassSerializerInterceptor)
export default class KnowledgeController {
  constructor(private readonly KnowledgeService: KnowledgeService) {}

  @Post()
  @ApiOperation({ title: '创建知识点' })
  @ApiResponse({
    status: 201,
    type: ResKnowledgeType,
  })
  @ApiResponse({
    status: 400,
    type: ErrorRes,
  })
  async create(@Body() data: CreateKnowledgeDto) {
    return new CreateKnowledgeDto();
  }

  @Delete(':ids')
  @ApiOperation({ title: '根据ID删除知识点' })
  @ApiResponse({
    status: 200,
    type: DeleteSuccessRes,
  })
  async delete() {
    return {};
  }

  @Put(':id')
  @ApiOperation({ title: '根据ID修改知识点' })
  @ApiResponse({
    status: 200,
    type: ResKnowledge,
  })
  async change(@Body() data: ChangeKnowledgeDto) {
    return {};
  }

  @Get(':id')
  @ApiOperation({ title: '根据ID获取知识点详情' })
  @ApiResponse({
    status: 200,
    type: ResKnowledge,
  })
  async getOne() {
    return {};
  }

  @Get()
  @ApiOperation({ title: '根据ID获取知识点列表' })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeList,
  })
  async getList() {
    return {};
  }
}
