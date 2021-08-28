import mysql from 'mysql';
import { promisify } from 'util';

import config from '../../config';

console.log('CONFIG IS', config);

export default class DatabaseService {
    private dbConnection;
    private promisfiedQuery: any;
    constructor() {
        this.dbConnection = mysql.createPool({
            user: config.dbUser,
            password: config.dbPassword,
            database: config.dbConnectionName,
            host: config.dbIpAddress,
            port: config.dbPort,
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
