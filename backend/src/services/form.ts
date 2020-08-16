import { FormDAL, Form } from "../base/Form";
import { User, UserDAL } from "../base/User";

export interface FormServiceDependencies {
    FormDAL: FormDAL;
    UserDAL: UserDAL;
};

export class FormService {
    private tools: FormServiceDependencies;

    constructor(dependencies: FormServiceDependencies) {
        this.tools = dependencies;
    }

    async create(user_id: number, name: string, submissions: number) {
        const form = await this.tools.FormDAL.create(new Form({
            name, submissions, user_id
        }));
        return form;
    }

    async get(): Promise<Form[]> {
        const forms = await this.tools.FormDAL.get();
        return forms;
    }

    async getOwner(user_id: number): Promise<User> {
        const owner = await this.tools.UserDAL.getById(user_id);
        return owner;
    }
};