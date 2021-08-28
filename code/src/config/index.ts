import dotenv from 'dotenv';

dotenv.config({
    path: './.env',
});

const isProduction = process.env.NODE_ENV === 'production';

const buildConfig = () => ({
    dbConnectionName: process.env.DATABASE_CONNECTION_NAME,
    dbDatabaseName: process.env.DATABASE_NAME,
    dbIpAddress: isProduction
        ? process.env.DATABASE_IP_ADDRESS
        : process.env.DEV_DATABASE_IP_ADDRESS,
    dbPassword: process.env.DATABASE_PASSWORD,
    dbPort: isProduction
        ? parseInt(process.env.DATABASE_PORT as string)
        : parseInt(process.env.DEV_DATABASE_PORT as string),
    dbUser: process.env.DATABASE_USER,
});

export default buildConfig();
