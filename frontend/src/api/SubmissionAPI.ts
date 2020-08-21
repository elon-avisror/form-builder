import { LabelAPI } from "./LabelAPI";

export interface SubmissionAPI {
    id: number;
    form_id: number;
    name: string;
    labels: LabelAPI[];
    created: Date;
};