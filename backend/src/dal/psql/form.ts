import { FormDAL, Form } from "../../base/Form";
import { PostgresDAL } from ".";

export class PostgresFormDAL implements FormDAL {
    db: PostgresDAL;

    constructor(db: PostgresDAL) {
        this.db = db;
    }

    async create(form: Form): Promise<Form> {
        const result = await this.db.insert('form', form);
        return result && result.rowCount === 1 && new Form(result.rows[0]);
    }

    async getById(id: number): Promise<Form> {
        const result = await this.db.getById('form', id);
        return result && result.rowCount === 1 && new Form(result.rows[0]);
    }

    async get(): Promise<Form[]> {
        const results = await this.db.query(`
            SELECT
                *
            FROM
                "form"
        `, []);
        return results && results.rows.map(row => new Form(row));
    }

    async update(form: Form): Promise<Form> {
        const result = await this.db.query(`
            UPDATE
                "form"
            SET
                "name"=$2
            WHERE
                "id"=$1
            RETURNING
                *
        `, [form.id, form.name]);
        return result && result.rowCount === 1 && new Form(result.rows[0]);
    }

    async deleteById(id: number): Promise<boolean> {
        const result = await this.db.deleteById('form', id);
        return result && result.rowCount === 1;
    }
};