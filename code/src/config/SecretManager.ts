import { SecretManagerServiceClient } from '@google-cloud/secret-manager';

export default class SecretManager {
    private secretManagerClient;
    constructor() {
        this.secretManagerClient = new SecretManagerServiceClient();
    }
    public async getSecretValue(resourceId: string) {
        const [version] = await this.secretManagerClient.accessSecretVersion({
            name: resourceId,
        });
        return (version.payload?.data as Buffer).toString('utf8');
    }
}
