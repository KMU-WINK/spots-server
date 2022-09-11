import { Router } from 'express';
import { requireBody } from '../utils/middleware/check-request';
import * as tokenService from '../services/token-service';

const router = Router();

router.post('/', requireBody(['email', 'password']), async (req, res) => {
  const token = await tokenService.createToken(req.body);
  res.status(201).json({
    msg: 'created',
    token,
  });
});

export default router;
