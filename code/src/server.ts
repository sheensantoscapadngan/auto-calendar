import express from 'express';
import router from './routes';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(router);

app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`);
});
