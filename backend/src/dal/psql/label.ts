import { LabelDAL, Label } from "../../base/Label";
import { PostgresDAL } from ".";

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

    async getByForm(form_id: number): Promise<Label[]> {
        const results = await this.db.query(`
            SELECT
                *
            FROM
                "label"
            WHERE
                "form_id"=$1
        `, [form_id]);
        return results && results.rows.map(row => new Label(row));
    }

    async updatesOrCreates(labels: Label[]): Promise<Label[]> {
        const results: Label[] = [];
        for(let i = 0; i < labels.length; i++) {
            let label = labels[i];

            // Validations
            if (label.id)
                results.push(await this.update(label));

            // TODO: check this!
            if (!label.form_id)
                results.push(null);

            const existingLabel = await this.getById(label.id);
            if (existingLabel) {
                label.id = existingLabel.id;
                results.push(await this.update(label));
            }
            else
                results.push(await this.create(label));
        }
        return results;
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