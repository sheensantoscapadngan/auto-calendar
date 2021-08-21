import { Router } from 'express';

const userRouter = Router();

userRouter.get('/create', (req, res) => {
    res.send('HELLO, THIS IS NOT A TEST. DIS IS DA PURGE');
});

export default userRouter;
