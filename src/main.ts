import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { payload } from './common/middleware/payload.middleware';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';
import { AuthModule } from './v1/auth/auth.module';
import { UserModule } from './v1/user/user.module';
import { KnowledgeTypeModule } from './v1/knowledge-type/knowledge-type.module';
import { KnowledgeModule } from './v1/knowledge/knowledge.module';

interface TagsListType {
  readonly tag: string;
  readonly module: any;
}

const createTagsDocs = (app, tagsList: TagsListType[]) => {
  tagsList.forEach(item => {
    const { tag, module} = item;
    const options = new DocumentBuilder()
      .setTitle('袋鼠库后台API')
      .setDescription('袋鼠库后台API列表')
      .setBasePath('kangaroo-library-center')
      .setVersion('1.0')
      .addTag(tag)
      .addBearerAuth()
      .build();
    const document = SwaggerModule.createDocument(app, options, {
      include: [module],
    });
    SwaggerModule.setup(`apiDoc/${tag}`, app, document);
  });
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('袋鼠库后台API')
    .setDescription('袋鼠库后台API列表')
    .setBasePath('kangaroo-library-center')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('apiDoc', app, document);
  const tagsList = [
    {
      tag: 'auth',
      module: AuthModule,
    },
    {
      tag: 'user',
      module: UserModule,
    },
    {
      tag: 'knowledge',
      module: KnowledgeModule,
    },
    {
      tag: 'knowledge-type',
      module: KnowledgeTypeModule,
    },
  ];
  createTagsDocs(app, tagsList);
  app.use(payload);
  app.setGlobalPrefix('kangaroo-library-center');
  // 全局注册错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  // 全局注册管道
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3333);
}
bootstrap();
