import { Router } from 'express';
import 'express-async-errors';
import { Schema } from 'mongoose';

const router = Router();

router.post('/', async (req, res) => {
  const { host, place, period, title, description, date, price } = req.body;
  const recruitment = await recruitmentService.createRecruitment({
    host, place, period, title, description, date, price,
  });
  res.status(201).json({
    msg: 'created',
    //  이 부분 추가로 작성해야됨
  });
});
