import { UserEntity } from './user.interface';

export class UserHelper {
  static sterilize(user: UserEntity) {
    const { password, otp, ...rest } = user;
    return rest;
  }
}
