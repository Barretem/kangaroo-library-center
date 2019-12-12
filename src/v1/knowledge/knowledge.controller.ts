import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  UseInterceptors,
  ClassSerializerInterceptor,
  Body,
  Param,
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
  constructor(private readonly knowledgeService: KnowledgeService) {}

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
    return this.knowledgeService.createOne(data);
  }

  @Delete(':ids')
  @ApiOperation({ title: '根据ID删除知识点' })
  @ApiResponse({
    status: 200,
    type: DeleteSuccessRes,
  })
  async delete(@Param('ids') ids: string) {
    return this.knowledgeService.deleteByIds(ids);
  }

  @Put(':id')
  @ApiOperation({ title: '根据ID修改知识点' })
  @ApiResponse({
    status: 200,
    type: ResKnowledge,
  })
  async change(@Param('id') id: number, @Body() data: ChangeKnowledgeDto) {
    return this.knowledgeService.change(id, data);
  }

  @Get(':id')
  @ApiOperation({ title: '根据ID获取知识点详情' })
  @ApiResponse({
    status: 200,
    type: ResKnowledge,
  })
  async getOne(@Param('id') id: number) {
    return this.knowledgeService.findOne(id);
  }

  @Get()
  @ApiOperation({ title: '获取知识点列表' })
  @ApiResponse({
    status: 200,
    type: ResKnowledgeList,
  })
  async getList() {
    return this.knowledgeService.findList();
  }
}
