import { UserDAL, User } from "../../base/User";
import { PostgresDAL } from ".";
import { resourceUsage } from "process";

export class PostgresUserDAL implements UserDAL {
    db: PostgresDAL;

    constructor(db: PostgresDAL) {
        this.db = db;
    }

    async create(user: User): Promise<User> {
        const result = await this.db.insert('user', user);
        return result && result.rowCount === 1 && new User(result.rows[0]);
    }

    async getById(id: number): Promise<User> {
        const result = await this.db.getById('user', id);
        return result && result.rowCount === 1 && new User(result.rows[0]);
    }

    async update(user: User): Promise<User> {
        const result = await this.db.query(`
            UPDATE
                "user"
            SET
                "first_name"=$2, "last_name"=$3, "age"=$4, "city"=$5, "phone_number"=$6
            WHERE
                "id"=$1
        `, [user.id, user.first_name, user.last_name, user.age, user.city, user.phone_number]);
        return result && result.rowCount === 1 && new User(result.rows[0]);
    }

    async deleteById(id: number): Promise<boolean> {
        const result = await this.db.deleteById('user', id);
        return result && result.rowCount === 1;
    }

};