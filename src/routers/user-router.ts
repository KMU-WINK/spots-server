import { Router } from 'express';
import * as userService from '../services/user-service';
import 'express-async-errors';

const router = Router();

router.post('/', async (req, res) => {
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

export default router;
