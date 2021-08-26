import express from 'express';
import router from './routes';

const PORT = process.env.PORT || 5000;
const app = express();

const startServer = async () => {
    app.use('/api', router);

    app.listen(PORT, () => {
        console.log(`LISTENING ON PORT ${PORT}`);
    });
};

startServer();
