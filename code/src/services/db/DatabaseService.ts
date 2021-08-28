import mysql from 'mysql';
import { promisify } from 'util';

import config from '../../config';

export default class DatabaseService {
    private dbConnection;
    private promisfiedQuery: any;
    constructor() {
        this.dbConnection = mysql.createPool({
            user: config.dbUser,
            password: config.dbPassword,
            database: config.dbConnectionName,
            host: '127.0.0.1',
            port: 3307,
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
