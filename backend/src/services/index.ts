import { FormBuilderDAL } from '../base/DAL';
import { FormService } from './form';
import { SubmissionService } from "./submission";

export interface FormBuilderServices {
    // Stand-Alone Services

    // System Services
    Form: FormService;
    Submission: SubmissionService;
};

export function loadServices(DAL: FormBuilderDAL): FormBuilderServices {
    let services = <FormBuilderServices>{};

    // Stand-Alone Services

    // System Services
    services.Form = new FormService({
        FormDAL: DAL.Form,
        LabelDAL: DAL.Label,
        SubmissionDAL: DAL.Submission
    });
    services.Submission = new SubmissionService({
        SubmissionDAL: DAL.Submission,
        FormDAL: DAL.Form
    });

    return services;
};