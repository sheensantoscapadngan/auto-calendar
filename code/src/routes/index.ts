import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

router.use('/user', UserController);

export default router;
