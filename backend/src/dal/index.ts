import { PostgresDAL, PostgresDALConfig } from './psql';

export async function Postgres(options: PostgresDALConfig): Promise<PostgresDAL> {
    const newDAL = new PostgresDAL(options);
    const result = await newDAL.query('SELECT NOW()', []);
    if (!result)
        throw new Error('[PostgresDAL] Unable to connect.');
    return newDAL;
};