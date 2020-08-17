import { LabelDAL, Label, LabelTypes } from "../base/Label";

export interface LabelServiceDependencies {
    LabelDAL: LabelDAL;
};

export class LabelService {
    private tools: LabelServiceDependencies;

    constructor(dependencies: LabelServiceDependencies) {
        this.tools = dependencies;
    }

    async create(form_id: number, name: string, type: LabelTypes, value: string): Promise<boolean> {
        const createdLabel = await this.tools.LabelDAL.create(new Label({
            form_id, name, type, value
        }));
        return createdLabel;
    }
};