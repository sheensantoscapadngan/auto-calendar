import { Router } from 'express';

const userRouter = Router();

userRouter.get('/create', (req, res) => {
    res.send('HELLO I AM UNDERWATER, HELP ME PLZ');
});

export default userRouter;
