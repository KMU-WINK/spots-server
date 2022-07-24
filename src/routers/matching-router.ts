import { Router } from 'express';
import 'express-async-errors';
import * as matchingService from '../services/matching-service';
import { requireBody } from '../utils/middleware/check-request';

const router = Router();

router.post('/', requireBody(['host', 'place', 'period', 'title', 'date', 'condition', 'isPublic']), async (req, res) => {
  const matching = await matchingService.createMatching(req.body);
  res.status(201).json({
    msg: 'created',
    //  이 부분 추가로 작성해야됨
  });
});

export default router;
