import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserModule } from './v1/user/user.module';
import { KnowledgeTypeModule } from './v1/knowledge-type/knowledge-type.module';
import { AuthModule } from './v1/auth/auth.module';

import { KnowledgeModule } from './v1/knowledge/knowledge.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [__dirname + '/common/entities/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ConfigModule,
    AuthModule,
    UserModule,
    KnowledgeTypeModule,
    KnowledgeModule,
  ],
})
export class AppModule {}
