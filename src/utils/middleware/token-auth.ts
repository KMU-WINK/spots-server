import { NextFunction, Request, Response } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { User } from '../../models/user-model';
import { ClientError } from '../../errors/base-error';

export const authUser = async (req: Request, res: Response, next: NextFunction) => {
  if (req.headers.authorization) {
    const secretKey = String(process.env.SECRET_KEY);
    const token = req.headers.authorization;
    try {
      const payload = jwt.verify(token, secretKey) as JwtPayload;
      const user = await User.findById(payload?.id);
      if (user) {
        req.context = {
          ...req.context,
          user,
        };
        next();
      }
    } catch (e) {
      throw new ClientError('토큰이 유효하지 않습니다.', 419);
    }
  } else {
    throw new ClientError('토큰이 유효하지 않습니다.', 419);
  }
};
