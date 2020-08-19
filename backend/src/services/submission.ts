import { SubmissionDAL, Submission } from "../base/Submission";

export interface SubmissionServiceDependencies {
    SubmissionDAL: SubmissionDAL;
};

export class SubmissionService {
    private tools: SubmissionServiceDependencies;

    constructor(dependencies: SubmissionServiceDependencies) {
        this.tools = dependencies;
    }

    async get(form_id: number): Promise<Submission[]> {
        const submissions = await this.tools.SubmissionDAL.getByForm(form_id);
        if(!submissions)
            return;
        for (let i = 0; i < submissions.length; i++) {
            submissions[i].labels = submissions[i].getValue();
        }
        return submissions;
    }
};