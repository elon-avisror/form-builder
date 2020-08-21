import { FormBuilderDAL } from '../base/DAL';
import { FormService } from './form';
import { LabelService } from "./label";
import { SubmissionService } from "./submission";

export interface FormBuilderServices {
    // Stand-Alone Services
    Label: LabelService;

    // System Services
    Form: FormService;
    Submission: SubmissionService;
};

export function loadServices(DAL: FormBuilderDAL): FormBuilderServices {
    let services = <FormBuilderServices>{};

    // Stand-Alone Services
    services.Label = new LabelService({ LabelDAL: DAL.Label });

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