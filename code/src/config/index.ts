import dotenv from 'dotenv';

dotenv.config({
    path: './.env',
});

const isProduction = process.env.NODE_ENV === 'production';

const buildConfig = () => ({
    dbConnectionName: process.env.DATABASE_NAME,
    dbIpAddress: isProduction
        ? process.env.DATABASE_IP_ADDRESS
        : process.env.DEV_DATABASE_IP_ADDRESS,
    dbUser: process.env.DATABASE_USER,
    dbPassword: process.env.DATABASE_PASSWORD,
    dbPort: isProduction
        ? parseInt(process.env.DATABASE_PORT as string)
        : parseInt(process.env.DEV_DATABASE_PORT as string),
});

export default buildConfig();
