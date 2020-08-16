import { BaseDAL } from "./DAL";

export class Form {
    id: number;
    name: string;
    submissions: number;
    submit_page: string;
    submissions_page: string;

    constructor(options: Partial<Form>) {
        this.id = parseInt(options.id as any);
        this.name = name;
        this.submissions = parseInt(options.submissions as any);
        this.submit_page = options.submit_page;
        this.submissions_page = options.submissions_page;
    }
};

export interface FormDAL extends BaseDAL {};