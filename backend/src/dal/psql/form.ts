import { FormDAL, Form } from "../../base/Form";
import { PostgresDAL } from ".";

export class PostgresFormDAL implements FormDAL {
    db: PostgresDAL;

    constructor(db: PostgresDAL) {
        this.db = db;
    }

    async create(form: Form): Promise<Form> {
        throw new Error("Method not implemented.");
    }

    async getById(id: number): Promise<Form> {
        throw new Error("Method not implemented.");
    }

    async update(form: Form): Promise<Form> {
        throw new Error("Method not implemented.");
    }

    async deleteById(id: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
};