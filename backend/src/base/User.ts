import { BaseDAL } from "./DAL";

export class User {
    id: number;
    first_name: string;
    last_name: string;
    age: number;
    city: string;
    phone_number: string;
    created: Date;

    constructor(options: Partial<User>) {
        this.id = parseInt(options.id as any);
        this.first_name = options.first_name;
        this.last_name = options.last_name;
        this.age = parseFloat(options.age as any);
        this.city = options.city;
        this.phone_number = options.phone_number;
        this.created = options.created;
    }
};

export interface UserDAL extends BaseDAL {};