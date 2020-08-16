import { FormService } from './form';
import { FormBuilderDAL } from '../base/DAL';

export interface FormBuilderServices {
    // Stand-Alone Services

    // System Services
    Form: FormService;
};

export function loadServices(DAL: FormBuilderDAL): FormBuilderServices {
    let services = <FormBuilderServices>{};

    // Stand-Alone Services

    // System Services
    services.Form = new FormService({ FormDAL: DAL.Form });

    return services;
};