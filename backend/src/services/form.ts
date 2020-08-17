import { FormDAL, Form } from "../base/Form";

export interface FormServiceDependencies {
    FormDAL: FormDAL;
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

    async submit(form_id: number, data: any): Promise<boolean> {
        return;
    }
};