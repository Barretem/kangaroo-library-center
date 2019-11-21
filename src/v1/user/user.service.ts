import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User as UserClass } from './classes/user.class';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '../../common/entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) { }

  /**
   * 新增用户
   * @param user CreateUserDto
   */
  async create(user: CreateUserDto): Promise<UserClass> {
    return this.userRepository.save(user);
  }

  /**
   * 根据UserId删除用户
   * @param userId
   */
  async deleteUserById(userId: string) {
    return this.userRepository.delete({userId});
  }

  async findOne(id: number | string) {
    return this.userRepository.find();
  }
}
