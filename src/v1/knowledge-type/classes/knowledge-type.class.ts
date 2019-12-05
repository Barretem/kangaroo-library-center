import { ApiModelProperty } from '@nestjs/swagger';

export default class KnowledgeTypeClass {
  @ApiModelProperty({ example: 0, description: '知识类ID' })
  id: number;

  @ApiModelProperty({ example: 'nodeJS', description: '知识类名' })
  typeName: string;

  @ApiModelProperty({ example: -1, description: '父ID，根节点父节点ID为-1' })
  parentId: number;

  @ApiModelProperty({
    example: '/1/2/3',
    description: '类型树路径，用/隔开',
  })
  path: string;

  @ApiModelProperty({
    example: '3d5784f6-9749-4939-bcce-3176d0433ad1',
    description: '创建用户的ID',
  })
  createdBy: string;
}
