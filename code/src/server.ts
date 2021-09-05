import express from 'express';
import router from './routes';
import cors from 'cors';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use('/api', router);

app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`);
});
