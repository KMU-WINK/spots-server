// 비밀번호 정규식으로 체크하는 함수
import { User } from '../models/user-model';
import { UserDocument } from '../entities/user-entity';
import { ClientError } from '../errors/base-error';

export function checkPassword(password: string): boolean {
  const regExpPw = /(?=.*\d{1,50})(?=.*[~`!@#$%^&*()\-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,50}$/;
  return regExpPw.test(password) && password.length <= 16;
}

export async function createUser(args: {
  email: string,
  password: string,
  name: string,
  nickname: string,
  bio: string,
}): Promise<UserDocument> {
  if (checkPassword(args.password)) {
    const user = new User(args);
    await user.save();
    return user;
  }
  throw new ClientError('BadParameter', 401);
}
