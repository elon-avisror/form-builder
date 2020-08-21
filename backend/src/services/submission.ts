import { SubmissionDAL, Submission, SubmissionType } from "../base/Submission";
import { FormDAL } from "../base/Form";

export interface SubmissionServiceDependencies {
    SubmissionDAL: SubmissionDAL;
    FormDAL: FormDAL;
};

export class SubmissionService {
    private tools: SubmissionServiceDependencies;

    constructor(dependencies: SubmissionServiceDependencies) {
        this.tools = dependencies;
    }

    async get(form_id: number, type?: SubmissionType): Promise<Submission[]> {
        const submissions = await this.tools.SubmissionDAL.get(new Submission({
            form_id, type
        }));
        if (!Array.isArray(submissions))
            return;
        for (let i = 0; i < submissions.length; i++) {
            submissions[i].labels = submissions[i].getValue();
        }
        return submissions;
    }

    async getFormName(form_id: number): Promise<string> {
        const formName = await this.tools.FormDAL.getName(form_id);
        return formName;
    }
};