import { FormDAL } from "./Form";

export interface BaseDAL {
    create(item: any): Promise<any>;
    getById(id: number): Promise<any>;
    update(item: any): Promise<any>;
    deleteById(id: number): Promise<any>;
};

export interface FormBuilderDAL {
    Form: FormDAL;
};