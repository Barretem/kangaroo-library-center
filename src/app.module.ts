import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UserController } from './v1/user/user.controller';
import { UserService } from './v1/user/user.service';

import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

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
  ],
  controllers: [UserController, CatsController],
  providers: [UserService, CatsService],
})
export class AppModule {}
