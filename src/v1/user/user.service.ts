import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as crypto from 'crypto-js';
import CreateUserDto from './dto/create-user.dto';
import UserEntity from '../../common/entities/user.entity';
import ChangeUserInfoDto from './dto/change-user-info.dto';
import LoginByEmailDto from './dto/login-by-email.dto';
import LoginByUsernameDto from './dto/login-by-username.dto';

@Injectable()
export default class UserService {

  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) { }

  /**
   * 新增用户
   * @param user CreateUserDto
   */
  async create(user: CreateUserDto): Promise<UserEntity> {
    const { username, email } = user;
    const usernameUsed = await this.findUserByUsername(username);
    if (usernameUsed) {
      throw new HttpException(`用户名${username}已经被占用！`, HttpStatus.BAD_REQUEST);
    }
    const emailUsed = await this.findUserByEmail(email);
    if (emailUsed) {
      throw new HttpException(`邮箱${email}已经被占用，请更换邮箱或者取回密码！`, HttpStatus.BAD_REQUEST);
    }
    const password = crypto.MD5(user.password).toString();
    const createdUser = await this.userRepository.save({
      ...user,
      password,
    });
    return new UserEntity(createdUser);
  }

  /**
   * 根据UserId删除用户
   * @param userId
   */
  async deleteUserById(userId: string) {
    const userIds = userId.split(',');
    return this.userRepository.delete(userIds);
  }

  /**
   * 修改用户信息
   * @param user
   */
  async changeUserInfo(user: ChangeUserInfoDto): Promise<UserEntity> {
    const { userId, password } = user;
    const targetUser = await this.findUserById(userId);
    if (targetUser) {
      const passwordMD5 = password ? crypto.MD5(password).toString() : targetUser.password;
      const changeUser = await this.userRepository.save({
        ...user,
        password: passwordMD5,
      });
      return new UserEntity(changeUser);
    } else {
      throw new HttpException('用户不存在！', HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * 查找所有的用户
   */
  async findAll(): Promise<UserEntity []> {
    const userList = await this.userRepository.find({
      order: {
        createdTime: 'ASC',
      },
    });
    return userList.map(info => {
      return new UserEntity(info);
    });
  }

  /**
   * 根据UserId查询用户
   * @param userId
   */
  async findUserById(userId: string) {
    return this.userRepository.findOne(userId);
  }

  /**
   * 根据email查询用户
   * @param email
   */
  async findUserByEmail(email: string) {
    return this.userRepository.findOne({ email });
  }

  /**
   * 根据用户名查询用户
   * @param username
   */
  async findUserByUsername(username: string) {
    return this.userRepository.findOne({ username });
  }

  /**
   * 根据用户名密码登录
   * @param data
   */
  async loginByUsername(data: LoginByUsernameDto): Promise<UserEntity> {
    const password = crypto.MD5(data.password).toString();
    const user = await this.findUserByUsername(data.username);
    if (!user) {
      throw new HttpException('用户不存在', HttpStatus.BAD_REQUEST);
    }
    const targetUser = await this.userRepository.findOne({
      ...data,
      password,
    });
    if (!targetUser) {
      throw new HttpException('用户名或者密码错误！', HttpStatus.BAD_REQUEST);
    }
    return targetUser;
  }

  /**
   * 根据email以及密码登录
   * @param data
   */
  async loginByEmail(data: LoginByEmailDto): Promise<UserEntity> {
    const password = crypto.MD5(data.password).toString();
    const user = await this.findUserByEmail(data.email);
    if (!user) {
      throw new HttpException(`邮箱${data.email}还没注册！`, HttpStatus.BAD_REQUEST);
    }
    const targetUser = await this.userRepository.findOne({
      ...data,
      password,
    });
    if (!targetUser) {
      throw new HttpException('用户邮箱或者密码错误！', HttpStatus.BAD_REQUEST);
    }
    return targetUser;
  }
}
