import { Router } from 'express';
import * as userService from '../services/user-service';
import * as tokenService from '../services/token-service';
import 'express-async-errors';
import { authUser } from '../utils/middleware/token-auth';
import { requireBody } from '../utils/middleware/check-request';

const router = Router();

router.post('/', requireBody(['email', 'password', 'name', 'nickname', 'bio']), async (req, res) => {
  const { email, password, name, nickname, bio } = req.body;
  const user = await userService.createUser({
    email, password, name, nickname, bio,
  });
  res.status(201).json({
    msg: 'created',
    userId: user._id,
    createdAt: user.createdAt,
  });
});

router.get('/', authUser, (req, res) => {
  res.status(200).json({
    msg: 'success',
    user: req.context.user?._id,
  });
});

export default router;
