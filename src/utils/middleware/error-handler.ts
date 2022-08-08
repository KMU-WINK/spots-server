import { Request, Response, NextFunction } from 'express';

function ErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  if (err?.code) {
    if (err.code === 11000 && err?.keyValue) {
      // MongoDB Duplicate Key Error
      if (Object.keys(err.keyValue).includes('email')) { // email 중복
        return res.status(400).json({
          message: 'this user is already registered.',
          success: false,
        });
      }
    }
  }
  return res.status(err.status || 500).json({ message: err.message, success: false });
}

export default ErrorHandler;
