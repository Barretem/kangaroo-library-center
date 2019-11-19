import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { payload } from './common/middleware/payload.middleware';
import { TransformInterceptor } from './common/interceptor/transform.interceptor';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('袋鼠库后台API')
    .setDescription('袋鼠库后台API列表')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  app.use(payload);
  // 全局注册错误的过滤器
  app.useGlobalFilters(new HttpExceptionFilter());
  // 全局注册拦截器
  app.useGlobalInterceptors(new TransformInterceptor());
  await app.listen(3000);
}
bootstrap();
