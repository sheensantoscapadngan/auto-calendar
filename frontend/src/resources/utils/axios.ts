import axios from 'axios';

export default axios.create({
    baseURL:
        process.env.NODE_ENV === 'production'
            ? process.env.DEPLOYMENT_URL
            : 'http://localhost:5000/api',
});
