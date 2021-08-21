import { Router } from 'express';

const userRouter = Router();

userRouter.get('/create', (req, res) => {
    res.send('HELLO, THIS IS NOT A TEST.');
});

export default userRouter;
