import { UnauthorizedException } from '@nestjs/common';

/**
 * 判断用户是否有管理员权限，如果没有则抛出401
 * @param role string root admin guest
 */
interface JwtInfo {
  role: string;
}
export const managerPass = (data: JwtInfo): void => {
  if (data.role !== 'admin' && data.role !== 'root') {
    throw new UnauthorizedException();
  }
};
