import { Router } from 'express';
import 'express-async-errors';
import * as matchingService from '../services/matching-service';
import { requireBody } from '../utils/middleware/check-request';
import { authUser } from '../utils/middleware/token-auth';
import { UserDocument } from '../entities/user-entity';
import { getAllMatching } from '../services/matching-service';

const router = Router();

router.post('/', requireBody(['place', 'period', 'title', 'date', 'condition', 'isPublic']), authUser, async (req, res) => {
  const matching = await matchingService.createMatching(req.body, req.context.user as UserDocument);
  res.status(201).json({
    msg: 'created',
    matching: matching._id,
  });
});

router.get('/', async (req, res) => {
  const matchings = await getAllMatching();
  res.status(200).json(matchings);
});

export default router;
