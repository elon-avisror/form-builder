import { BaseDAL } from './DAL';

export class Label {
    id: number;
    form_id: number;
    name: string;
    type: LabelTypes;
    value: string;
    created: Date;

    constructor(options: Partial<Label>) {
        this.id = parseInt(options.id as any);
        this.form_id = parseInt(options.form_id as any);
        this.name = options.name;
        this.type = options.type || LabelTypes.Text;
        this.value = options.value;
        this.created = options.created;
    }
};

export enum LabelTypes {
    Text = 'text',
    Date = 'date',
    Email = 'email',
    Tel = 'tel',
    Number = 'number'
};

export interface LabelDAL extends BaseDAL {};