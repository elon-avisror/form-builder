import { FormDAL } from "./Form";
import { UserDAL } from "./User";

export interface BaseDAL {
    create(item: any): Promise<any>;
    getById(id: number): Promise<any>;
    update(item: any): Promise<any>;
    deleteById(id: number): Promise<any>;
};

export interface FormBuilderDAL {
    User: UserDAL;
    Form: FormDAL;
};