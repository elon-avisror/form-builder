import { FormDAL, Form } from "../base/Form";

export interface FormServiceDependencies {
    FormDAL: FormDAL;
};

export class FormService {
    private tools: FormServiceDependencies;

    constructor(dependencies: FormServiceDependencies) {
        this.tools = dependencies;
    }

    async get(): Promise<Form[]> {
        const forms = await this.tools.FormDAL.get();
        return forms;
    }
};