import { SubmissionDAL, Submission } from "../../base/Submission";
import { PostgresDAL } from ".";

export class PostgresSubmissionDAL implements SubmissionDAL {
    db: PostgresDAL;

    constructor(db: PostgresDAL) {
        this.db = db;
    }
    
    async create(submission: Submission): Promise<Submission> {
        const result = await this.db.insert('submission', submission);
        return result && result.rowCount === 1 && new Submission(result.rows[0]);
    }
    
    async getById(id: number): Promise<Submission> {
        const result = await this.db.getById('submission', id);
        return result && result.rowCount === 1 && new Submission(result.rows[0]);
    }

    async getByForm(form_id: number): Promise<Submission[]> {
        const results = await this.db.query(`
            SELECT
                *
            FROM
                "submission"
            WHERE
                "form_id"=$1
        `, [form_id]);
        return results && results.rows.map(row => new Submission(row));
    }
    
    async update(submission: Submission): Promise<Submission> {
        const result = await this.db.query(`
            UPDATE
                "submission"
            SET
                "labels"=$2
            WHERE
                "id"=$1
        `, [submission.id, submission.labels]);
        return result && result.rowCount === 1 && new Submission(result.rows[0]);
    }
    
    async deleteById(id: number): Promise<boolean> {
        const result = await this.db.deleteById('submission', id);
        return result && result.rowCount === 1;
    }
};