import express, { Application } from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/user-router';
import ErrorHandler from './utils/middleware/error-handler';
import matchingRouter from './routers/matching-router';

const app: Application = express();

const port = process.env.PORT;

app.use(express.json());
app.use('/api/users', userRouter);
app.use('/api/matchings', matchingRouter);

app.use(ErrorHandler);

app.listen(port, () => {
  console.log(`Server is  listening on ${port}`);
});

mongoose
  .connect(String(process.env.MONGO_URI))
  .then(() => console.log('Successfully connected to mongodb!'))
  .catch((e) => console.log(e));
