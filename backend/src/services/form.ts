import { FormDAL } from "../base/Form";

export interface FormServiceDependencies {
    FormDAL: FormDAL;
};

export class FormService {
    private tools: FormServiceDependencies;

    constructor(dependencies: FormServiceDependencies) {
        this.tools = dependencies;
    }
};