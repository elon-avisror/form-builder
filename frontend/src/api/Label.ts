export interface Label {
    id: number;
    form_id: number;
    name: string;
    type: LabelTypes;
    value: string;
    created: Date;
};

export enum LabelTypes {
    Text = 'text',
    Date = 'date',
    Email = 'email',
    Tel = 'tel',
    Number = 'number'
};