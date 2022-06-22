import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';
import { Test } from './models/test-model';

const app: Application = express();

const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}!`);
});

mongoose
  .connect(String(process.env.MONGO_URI))
  .then(() => console.log('Successfully connected to mongodb!'))
  .catch((e) => console.log(e));
