import { Router } from 'express';

import DatabaseService from '../services/db/DatabaseService';

const userRouter = Router();

userRouter.get('/create', async (req, res) => {
    // FOR TESTING PURPOSES ONLY
    const dbService = new DatabaseService();
    const resp = await dbService.query('user_getAll', []);
    res.send(resp);
});

userRouter.get('/test', async (req, res) => {
    // FOR TESTING PURPOSES ONLY
    res.send('U ARE A NooB!');
});

export default userRouter;
