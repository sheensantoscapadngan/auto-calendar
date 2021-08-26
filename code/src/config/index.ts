import dotenv from 'dotenv';
import SecretManager from './SecretManager';

dotenv.config({
    path: '../../.env',
});

const secretManagerService = new SecretManager();

export const buildConfig = async () => ({
    CLOUD_SQL_PUBLIC_IP_ADDRESS: await secretManagerService.getSecretValue(
        process.env.CLOUD_SQL_PUBLIC_IP_ADDRESS_RESOURCE_ID as string
    ),
});
