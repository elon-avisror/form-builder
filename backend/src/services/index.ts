import { FormBuilderDAL } from '../base/DAL';
import { FormService } from './form';
import { LabelService } from "./label";
import { SubmissionService } from "./submission";

export interface FormBuilderServices {
    // FUTURE: Stand-Alone Services

    // System Services
    Form: FormService;
    Label: LabelService;
    Submission: SubmissionService;
};

export function loadServices(DAL: FormBuilderDAL): FormBuilderServices {
    let services = <FormBuilderServices>{};

    // FUTURE: Stand-Alone Services

    // System Services
    services.Form = new FormService({
        FormDAL: DAL.Form,
        LabelDAL: DAL.Label,
        SubmissionDAL: DAL.Submission
    });
    services.Label = new LabelService({ LabelDAL: DAL.Label });
    services.Submission = new SubmissionService({ SubmissionDAL: DAL.Submission });

    return services;
};