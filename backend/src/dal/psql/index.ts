import { PoolConfig, Pool, QueryResult } from 'pg';
import { FormBuilderDAL } from '../../base/DAL';
import { FormDAL } from '../../base/Form';
import { LabelDAL } from '../../base/Label';
import { SubmissionDAL } from '../../base/Submission';
import { PostgresFormDAL } from './form';
import { PostgresLabelDAL } from './label';
import { PostgresSubmissionDAL } from './submission';

export interface PostgresDALConfig {
    poolConfig: PoolConfig;
};

export class PostgresDAL implements FormBuilderDAL {
    private _pool: Pool;

    Form: FormDAL;
    Label: LabelDAL;
    Submission: SubmissionDAL;

    constructor(options: PostgresDALConfig) {
        // Create pg Pool
        this._pool = new Pool(options.poolConfig);
        // Bind pool events
        this._pool.on('error', this.error.bind(this));

        // Register DALs
        this.Form = new PostgresFormDAL(this);
        this.Label = new PostgresLabelDAL(this);
        this.Submission = new PostgresSubmissionDAL(this);
    }

    async query(query: string, values: Array<any>): Promise<QueryResult> {
        if (!this._pool) {
            this.error(new Error('Pool is not connected.'));
            return;
        }

        // Complete encapsulation of query errors
        try {
            return await this._pool.query(query, values);
        } catch(err) {
            this.error(err);
            return;
        }
    }

    insert(table: string, obj: any): Promise<QueryResult> {
        const columns = Object.keys(obj).filter(k => k !== 'id' && obj[k] !== null && obj[k] !== undefined);
        const values = [], valueIndexes = [];

        for(let i = 0; i < columns.length; i++) {
            values.push(obj[columns[i]]);
            valueIndexes.push('$'+values.length);
        }

        return this.query(`
            INSERT INTO
                "${table}" (${columns.join(',')})
            VALUES
                (${valueIndexes.join(',')})
            RETURNING
                *
        `, values);
    }

    insertArray(table: string, objs: any[]): Promise<QueryResult[]> {
        return Promise.all(objs.map(obj => this.insert(table, obj)));
    }

    getById(table: string, id: number): Promise<QueryResult> {
        return this.query(`
            SELECT
                *
            FROM
                "${table}"
            WHERE
                "id"=$1
        `, [id]);
    }

    deleteById(table: string, id: number): Promise<QueryResult> {
        return this.query(`
            DELETE FROM
                "${table}"
            WHERE
                "id"=$1
        `, [id]);
    }

    error(err: Error): void {
        console.error(`[PSQL] ${err.message}`);
    }
};