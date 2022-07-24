import { Request, Response, NextFunction } from 'express';
import { ClientError } from '../../errors/base-error';

export function requireBody(required: string[]) {
  return function (req: Request, res: Response, next: NextFunction) {
    const reqBodyList = Object.keys(req.body);
    const hasAllRequiredBody = required.every((key) => reqBodyList.includes(key) && req.body[key]);
    if (!hasAllRequiredBody) {
      throw new ClientError('BadParameters', 400);
    }
    next();
  };
}
