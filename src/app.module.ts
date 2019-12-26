import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import UserModule from './v1/user/user.module';
import KnowledgeTypeModule from './v1/knowledge-type/knowledge-type.module';

import UserEntity from './common/entities/user.entity';
import KnowledgeType from './common/entities/knowledge-type.entity';
import Knowledge from './common/entities/knowledge.entity';

import KnowledgeModule from './v1/knowledge/knowledge.module';
import { ConfigModule } from './config/config.module';
console.log(process.env.DB_HOST);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [UserEntity, KnowledgeType, Knowledge],
      synchronize: true,
    }),
    ConfigModule,
    UserModule,
    KnowledgeTypeModule,
    KnowledgeModule,
  ],
})
export default class AppModule {}
