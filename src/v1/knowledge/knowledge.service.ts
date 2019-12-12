import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import KnowledgeEntity from '../../common/entities/knowledge.entity';
import CreateKnowledgeDto from './dto/create-knowledge.dto';
import ChangeKnowledgeDto from './dto/change-knowledge.dto';
import KnowledgeTypeEntity from '../../common/entities/knowledge-type.entity';

@Injectable()
export default class KnowledgeService {
  constructor(
    @InjectRepository(KnowledgeEntity)
    private readonly knowledgeRepository: Repository<KnowledgeEntity>,
    @InjectRepository(KnowledgeTypeEntity)
    private readonly knowledgeTypeRepository: Repository<KnowledgeTypeEntity>,
  ) {}

  /**
   * 添加知识分类
   * @param data
   */
  async createOne(data: CreateKnowledgeDto): Promise<KnowledgeEntity> {
    const { title, knowledgeTypeId } = data;
    if (!title) {
      throw new HttpException('题目不能为空', HttpStatus.BAD_REQUEST);
    }
    if (knowledgeTypeId) {
      // 查询knowledgeTypeId是否存在
      const knowledgeType = await this.knowledgeTypeRepository.findOne(
        knowledgeTypeId,
      );
      if (!knowledgeType) {
        throw new HttpException(
          '知识分类不存在，请选择正确的知识分类',
          HttpStatus.BAD_REQUEST,
        );
      }
    }
    // 检查title是否为空
    // 检查同一分类下，是否存在相同的title
    return this.knowledgeRepository.save(data);
  }

  /**
   * 根据ID删除知识
   * @param ids
   */
  async deleteByIds(ids: string): Promise<boolean> {
    const idsArray = ids.split(',');
    const result = await this.knowledgeRepository.delete(idsArray);
    return Boolean(result);
  }

  /**
   * 根据ID修改知识详情
   * @param id
   * @param data
   */
  async change(id: number, data: ChangeKnowledgeDto): Promise<KnowledgeEntity> {
    const current = await this.knowledgeRepository.findOne(id);
    if (!current) {
      throw new HttpException('知识不存在，修改失败！', HttpStatus.BAD_REQUEST);
    }
    return this.knowledgeRepository.save({
      ...current,
      ...data,
    });
  }

  /**
   * 根据ID查询知识详情
   * @param id
   */
  async findOne(id: number): Promise<KnowledgeEntity> {
    const knowledge = await this.knowledgeRepository.findOne(id);
    if (!knowledge) {
      throw new HttpException('该知识不存在！', HttpStatus.BAD_REQUEST);
    }
    return knowledge;
  }

  /**
   * 查询知识列表
   */
  async findList(): Promise<KnowledgeEntity[]> {
    return this.knowledgeRepository.find({
      order: {
        createdTime: 'ASC',
      },
    });
  }
}
