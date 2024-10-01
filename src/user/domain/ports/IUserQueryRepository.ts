import {User} from "../entities/User";

export interface IUserQueryRepository {
    getAll(): User[];
    getById(id: string): User | undefined;
}