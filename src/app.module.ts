import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CatsModule } from './cats/cats.module';
import { UserModule } from './v1/user/user.module';

import { User } from './common/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'barretem@123',
      database: 'kangaroo_library_center',
      entities: [User],
      synchronize: true,
    }),
    UserModule,
    CatsModule,
  ]
})
export class AppModule {}
