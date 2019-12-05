import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import UserModule from './v1/user/user.module';
import KnowledgeTypeModule from './v1/knowledge-type/knowledge-type.module';

import UserEntity from './common/entities/user.entity';
import KnowledgeType from './common/entities/knowledge-type.entity';
import Knowledge from './common/entities/knowledge.entity';

import KnowledgeModule from './v1/knowledge/knowledge.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'barretem@123',
      database: 'kangaroo_library_center',
      entities: [UserEntity, KnowledgeType, Knowledge],
      synchronize: true,
    }),
    UserModule,
    KnowledgeTypeModule,
    KnowledgeModule,
  ],
})
export default class AppModule {}
