import { Injectable } from '@nestjs/common';
import { User } from './classes/user.class';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
  private readonly users: User[] = [];

  create(user: CreateUserDto): User {
    this.users.push(user);
    return user;
  }

  findOne(id: number | string): User {
    return {
      username: '1212',
      email: '11@qq.com',
      password: '1221',
      rule: 'guest',
    };
  }
}
