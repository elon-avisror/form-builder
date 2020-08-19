import { LabelDAL, Label, LabelTypes } from "../base/Label";

export interface LabelServiceDependencies {
    LabelDAL: LabelDAL;
};

export class LabelService {
    private tools: LabelServiceDependencies;

    constructor(dependencies: LabelServiceDependencies) {
        this.tools = dependencies;
    }

    async create(form_id: number, name: string, type: LabelTypes, value: string): Promise<Label> {
        const createdLabel = await this.tools.LabelDAL.create(new Label({
            form_id, name, type, value
        }));
        return createdLabel;
    }

    async get(options: { form_id?: number, label_id?: number } = {}): Promise<Label[]> {
        if (options.form_id)
            return await this.tools.LabelDAL.getByForm(options.form_id);
        if (options.label_id)
            return [await this.tools.LabelDAL.getById(options.label_id)];
        return;
    }
};