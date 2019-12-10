import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { arrayToTree } from '../../common/utils/tree';

import CreateKnowledgeTypeDto from './dto/create-knowledge-type.dto';
import ChangeDto from './dto/change-knowledge-type.dto';

import KnowledgeTypeEntity from '../../common/entities/knowledge-type.entity';

@Injectable()
export default class KnowledgeTypeService {
  constructor(
    @InjectRepository(KnowledgeTypeEntity)
    private readonly knowledgeTypeRepository: Repository<KnowledgeTypeEntity>,
  ) {}

  /**
   * 创建知识分类
   */
  async create(data: CreateKnowledgeTypeDto): Promise<KnowledgeTypeEntity> {
    // 查询同级同名分类是否存在
    // 查询父分类是否存在
    const { parentId = 0, typeName } = data;
    const exitItem = await this.knowledgeTypeRepository.findOne({
      parentId,
      typeName,
    });
    if (exitItem) {
      throw new HttpException(
        '该分类下已经存在同名分类，请重新命名分类名称',
        HttpStatus.BAD_REQUEST,
      );
    }
    let path = '';
    if (parentId) {
      path = await this.createPathByParentId(parentId);
    }
    return this.knowledgeTypeRepository.save({
      ...data,
      path,
      parentId,
    });
  }

  async findItemByParentId(parentId: number): Promise<KnowledgeTypeEntity> {
    const item = await this.knowledgeTypeRepository.findOne(parentId);
    if (!item) {
      throw new HttpException('用户不存在', HttpStatus.BAD_REQUEST);
    }
    return item;
  }

  /**
   * 根据父ID生成Path路径
   * @param parentId
   */
  async createPathByParentId(parentId: number): Promise<string> {
    const path = [];
    // 根据父ID递归查询path
    const findParent = async (id: number) => {
      const item = await this.findItemByParentId(id);
      path.unshift(item.id);
      if (item.parentId) {
        await findParent(item.parentId);
      }
    };
    await findParent(parentId);
    return `/${path.join('/')}`;
  }

  /**
   * 查询分类列表
   */
  async findList(): Promise<KnowledgeTypeEntity[]> {
    return this.knowledgeTypeRepository.find({
      order: {
        createdTime: 'ASC',
      },
    });
  }

  /**
   * 单条查询分类
   * @param id
   */
  async findItem(id: number): Promise<KnowledgeTypeEntity> {
    const item = await this.knowledgeTypeRepository.findOne(id);
    if (!item) {
      throw new HttpException('该分类不存在', HttpStatus.BAD_REQUEST);
    }
    return item;
  }
  /**
   * 根据IDS删除知识分类
   * @param id
   */
  async deleteTypeById(id: number) {
    // 查询该分类下是否有子分类，如果有子分类则不允许删除
    const childType = await this.knowledgeTypeRepository.findOne({
      parentId: id,
    });
    if (childType) {
      throw new HttpException(
        '该分类有下有子分类，不允许删除',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.knowledgeTypeRepository.delete(id);
  }

  /**
   * 批量删除分类
   * @param ids
   */
  async deleteTypeByIds(ids: string): Promise<boolean> {
    const typeIds = ids.split(',');
    const promiseList = [];
    for (const item of typeIds) {
      promiseList.push(this.deleteTypeById(Number(item)));
    }
    return Promise.all(promiseList).then(() => true);
  }

  /**
   * 修改分类信息
   * @param data
   */
  async changeType(id: number, data: ChangeDto): Promise<KnowledgeTypeEntity> {
    const { parentId } = data;
    // 检查父分类是否存在
    let path = '';

    if (parentId) {
      const parentItem = await this.knowledgeTypeRepository.findOne(parentId);
      if (!parentItem) {
        throw new HttpException('父级分类不存在，修改失败', HttpStatus.BAD_REQUEST);
      }
      path = await this.createPathByParentId(parentId);
    }
    const beforeInfo = await this.knowledgeTypeRepository.findOne(id);
    return this.knowledgeTypeRepository.save({
      ...beforeInfo,
      ...data,
      path,
    });
  }

  /**
   * 获取完整的树
   */
  async getWholeTree(): Promise<any> {
    // 获取分类列表
    const list = await this.findList();
    return arrayToTree(list);
  }
}
