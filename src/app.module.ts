import { Module } from '@nestjs/common';
import { UserController } from './v1/user/user.controller';
import { UserService } from './v1/user/user.service';

import { CatsController } from './cats/cats.controller';
import { CatsService } from './cats/cats.service';

@Module({
  imports: [],
  controllers: [UserController, CatsController],
  providers: [UserService, CatsService],
})
export class AppModule {}
