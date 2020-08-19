import { BaseDAL } from "./DAL";

export class Submission {
    id: number;
    form_id: number;
    labels: string;
    created: Date;

    constructor(options: Partial<Submission>) {
        this.id = parseInt(options.id as any);
        this.form_id = parseInt(options.form_id as any);
        this.created = options.created;
        
        this.setValue(options.labels);
    }

    setValue(val: any): void {
        try {
            if (typeof val === 'string') {
                this.labels = val;
                return;
            }
            this.labels = JSON.stringify(val);
        } catch (err) {
            console.error('[Submission]', 'setValue', err);
        }
    }

    getValue(): any {
        try {
            return JSON.parse(this.labels);
        } catch (err) {
            console.error('[Submission]', 'getValue', err);
        }
    }
};

export interface SubmissionDAL extends BaseDAL {
    getByForm(form_id: number): Promise<Submission[]>
};