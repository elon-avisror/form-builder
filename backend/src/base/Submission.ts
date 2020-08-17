import { BaseDAL } from "./DAL";

export class Submission {
    id: number;
    form_id: number;
    data: string;
    created: Date;

    constructor(options: Partial<Submission>) {
        this.id = parseInt(options.id as any);
        this.form_id = parseInt(options.form_id as any);
        this.created = options.created;
        
        this.setValue(options.data);
    }

    setValue(data: any): any {
        try {
            this.data = JSON.stringify(data);
        } catch (err) {
            console.error('[Submission]', 'setValue', err);
        }
    }

    getValue(): any {
        try {
            return JSON.parse(this.data);
        } catch (err) {
            console.error('[Submission]', 'getValue', err);
        }
    }
};

export interface SubmissionDAL extends BaseDAL {
    getByForm(form_id: number): Promise<Submission[]>
};