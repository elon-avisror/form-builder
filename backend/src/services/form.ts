import { FormDAL, Form } from "../base/Form";
import { LabelDAL, Label } from "../base/Label";
import { SubmissionDAL, Submission, SubmissionType } from "../base/Submission";

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

    async create(name: string, labels: Label[]): Promise<Form> {
        const form = await this.tools.FormDAL.create(new Form({ name }));
        if (!form)
            throw new Error('Cannot create form.');

        // Remove client label id's (or other unknown label data)
        const submissionLabels: any = labels.map(label => {
            return {
                name: label.name,
                type: label.type,
                value: label.value
            }
        });
        // By default it will create a blank form
        const submission = await this.tools.SubmissionDAL.create(new Submission({
            form_id: form.id,
            labels: submissionLabels
        }));
        if (!submission)
            throw new Error(`Cannot create submission to form with id ${form.id}.`);
        return form;
    }

    async get(options: { form_id?: number } = {}): Promise<Form[]> {
        if (options.form_id)
            return [await this.tools.FormDAL.getById(options.form_id)];
        const forms = await this.tools.FormDAL.getAll();
        return forms;
    }

    async submit(form_id: number, labels: any[]): Promise<boolean> {
        if (!Array.isArray(labels))
            return;

        const lables = [];
        const form: Form = await this.tools.FormDAL.getById(form_id);
        for (let i = 0; i < labels.length; i++) {
            lables.push(await this.tools.LabelDAL.create(new Label({
                form_id: form.id,
                ...labels[i]
            })))
        }

        const formSubmit = await this.tools.SubmissionDAL.create(new Submission({
            form_id: form.id,
            labels: labels as any,
            type: SubmissionType.Submited
        }));
        if (!formSubmit)
            return !!formSubmit;

        form.submissions++;
        const result = await this.tools.FormDAL.update(form);
        return !!result;
    }
};