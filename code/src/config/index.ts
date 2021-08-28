import dotenv from 'dotenv';

dotenv.config({
    path: '../.env',
});

const buildConfig = () => ({
    dbConnectionName: process.env.DATABASE_NAME,
    dbIpAddress: process.env.DATABASE_IP_ADDRESS,
    dbUser: process.env.DATABASE_USER,
    dbPassword: process.env.DATABASE_PASSWORD,
});

export default buildConfig();
