import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

export const authUser = (req: Request, res: Response, next: NextFunction) => {
  if (req.headers?.authorization) {
    const userId = jwt.verify(req.headers.authorization, String(process.env.SECRET_KEY));
    console.log(userId);
    next();
  }
};
