import { Request, Response, NextFunction } from 'express';

function ErrorHandler(err: any, req: Request, res: Response, next: NextFunction) {
  return res.status(err.status || 500).json({ message: err.message, success: false });
}

export default ErrorHandler;
