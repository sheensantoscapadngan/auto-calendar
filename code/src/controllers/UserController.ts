import { Router } from 'express';

const userRouter = Router();

userRouter.get('/create', (req, res) => {
    console.log('HELLO I AM UNDERWATER');
});

export default userRouter;
