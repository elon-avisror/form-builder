import { BaseDAL } from "./DAL";

export class Form {
    id: number;
    name: string;
    submissions: number;
    created: Date;

    constructor(options: Partial<Form>) {
        this.id = parseInt(options.id as any);
        this.name = options.name;
        this.submissions = parseInt(options.submissions as any) || 0;
        this.created = options.created;
    }
};

export interface FormDAL extends BaseDAL {
    getAll(): Promise<Form[]>;
    getName(form_id: number): Promise<string>;
};