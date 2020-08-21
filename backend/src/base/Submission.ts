import { BaseDAL } from './DAL';

export class Submission {
    id: number;
    form_id: number;
    type: SubmissionType;
    labels: string;
    created: Date;

    constructor(options: Partial<Submission>) {
        this.id = parseInt(options.id as any);
        this.form_id = parseInt(options.form_id as any);
        this.type = options.type || SubmissionType.Blank;
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

export enum SubmissionType {
    Blank = 'BLANK',
    Submited = 'SUBMITED'
};

export interface SubmissionDAL extends BaseDAL {
    get(options: { form_id: number, type?: SubmissionType }): Promise<Submission[]>;
};