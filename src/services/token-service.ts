import { User } from '../models/user-model';
import { ClientError } from '../errors/base-error';

export async function createToken(args: {
  email: string,
  password: string,
}) {
  const { email, password } = args;
  const user = await User.findOne({ email });
  if (user) {
    const token = await user.comparePassword(password) && user.generateToken();
    if (token) {
      return token;
    }
  }
  throw new ClientError('WrongToken', 401);
}
