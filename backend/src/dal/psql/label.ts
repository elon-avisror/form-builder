import { LabelDAL, Label } from '../../base/Label';
import { PostgresDAL } from '.';

export class PostgresLabelDAL implements LabelDAL {
    db: PostgresDAL;

    constructor(db: PostgresDAL) {
        this.db = db;
    }

    async create(label: Label): Promise<Label> {
        const result = await this.db.insert('label', label);
        return result && result.rowCount === 1 && new Label(result.rows[0]);
    }

    async getById(id: number): Promise<Label> {
        const result = await this.db.getById('label', id);
        return result && result.rowCount === 1 && new Label(result.rows[0]);
    }

    async update(label: Label): Promise<Label> {
        const result = await this.db.query(`
            UPDATE
                "label"
            SET
                "name"=$2, "value"=$3, "type"=$4
            WHERE
                "id"=$1
            RETURNING
                *
        `, [label.id, label.name, label.value, label.type]);
        return result && result.rowCount === 1 && new Label(result.rows[0]);
    }

    async deleteById(id: number): Promise<Label> {
        const result = await this.db.deleteById('label', id);
        return result && result.rowCount === 1 && new Label(result.rows[0]);
    }
};