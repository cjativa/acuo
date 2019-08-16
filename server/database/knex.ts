import * as knexLib from 'knex';
import { Config } from '../utils/config';

export const knex = knexLib({
    client: 'pg',
    connection: {
        host: Config.dbHost,
        user: Config.dbUser,
        password: Config.dbPassword,
        database: Config.dbName
    }
});