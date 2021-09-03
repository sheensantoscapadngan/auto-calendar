import mysql from 'mysql';
import { promisify } from 'util';

import config from '../../config';

console.log('NODE ENV IS', process.env.NODE_ENV, 'WITH CONFIGS', config);

export default class DatabaseService {
    private dbConnection;
    private promisfiedQuery: any;
    constructor() {
        const dbSocketPath = process.env.DB_SOCKET_PATH || '/cloudsql';
        const additionalConfig =
            process.env.NODE_ENV === 'production'
                ? {
                      socketPath: `${dbSocketPath}/${config.dbConnectionName}`,
                  }
                : {
                      host: config.dbIpAddress,
                      port: config.dbPort,
                  };
        this.dbConnection = mysql.createPool({
            user: config.dbUser,
            password: config.dbPassword,
            database: config.dbDatabaseName,
            ...additionalConfig,
        });
        this.promisfiedQuery = promisify(this.dbConnection.query).bind(
            this.dbConnection
        );
    }

    public async query(storedProcedure: string, args: any[]) {
        return this.promisfiedQuery(
            `CALL ${storedProcedure}(${args.join(',')})`
        );
    }
}
