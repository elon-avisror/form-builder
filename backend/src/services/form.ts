import { FormDAL, Form } from "../base/Form";
import { Label, LabelDAL } from "../base/Label";
import { SubmissionDAL, Submission } from "../base/Submission";

export interface FormServiceDependencies {
    FormDAL: FormDAL;
    LabelDAL: LabelDAL;
    SubmissionDAL: SubmissionDAL;
};

export class FormService {
    private tools: FormServiceDependencies;

    constructor(dependencies: FormServiceDependencies) {
        this.tools = dependencies;
    }

    async create(name: string) {
        const form = await this.tools.FormDAL.create(new Form({ name }));
        return form;
    }

    async get(options: { form_id?: number } = {}): Promise<Form[]> {
        if (options.form_id)
            return [await this.tools.FormDAL.getById(options.form_id)];
        const forms = await this.tools.FormDAL.getAll();
        return forms;
    }

    async submit(form_id: number, labels: any): Promise<boolean> {
        if (!(Array.isArray(labels)))
            return;
        const lables = [];
        for (let i = 0; i < labels.length; i++) {
            lables.push(await this.tools.LabelDAL.create(new Label({
                form_id,
                ...labels[i]
            })))
        }
        const formSubmit = await this.tools.SubmissionDAL.create(new Submission({
            form_id, labels: labels as any
        }));
        return !!formSubmit;
    }
};