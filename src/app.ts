import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import userRouter from './routers/user-router';
import ErrorHandler from './utils/middleware/error-handler';
import matchingRouter from './routers/matching-router';
import { UserDocument } from './entities/user-entity';
import tokenRouter from './routers/token-router';

const app: Application = express();

const port = process.env.PORT;

const corsOptions = {
  origin: '*', // 출처 허용 옵션
  credential: true, // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
};

app.use(cors(corsOptions));
app.use(express.json());
app.use('/api/token', tokenRouter);
app.use('/api/users', userRouter);
app.use('/api/matchings', matchingRouter);

app.use(ErrorHandler);

interface Context {
  user?: UserDocument,
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace,no-shadow
  namespace Express {
    // eslint-disable-next-line no-shadow
    interface Request {
      context: Context
    }
  }
}

app.listen(port, () => {
  console.log(`Server is  listening on ${port}`);
});

mongoose
  .connect(String(process.env.MONGO_URI))
  .then(() => console.log('Successfully connected to mongodb!'))
  .catch((e) => console.log(e));
