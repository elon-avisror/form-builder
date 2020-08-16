import { BaseDAL } from "./DAL";

export class Form {
    id: number;
    user_id: number;
    name: string;
    submissions: number;
    page_submit: string;
    page_list: string;
    created: Date;

    constructor(options: Partial<Form>) {
        this.id = parseInt(options.id as any);
        this.user_id = parseInt(options.user_id as any);
        this.name = options.name;
        this.submissions = parseInt(options.submissions as any);
        this.page_submit = options.page_submit;
        this.page_list = options.page_list;
        this.created = options.created;
    }
};

export interface FormDAL extends BaseDAL {
    get(): Promise<Form[]>;
};