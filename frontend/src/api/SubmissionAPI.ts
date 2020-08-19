import { LabelAPI } from "./LabelAPI";

export interface SubmissionAPI {
    id: number;
    form_id: number;
    labels: LabelAPI[];
    created: Date;
};