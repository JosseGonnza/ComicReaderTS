import {User} from "../entities/User";

export interface IUserCommandRepository {
    save(user: User): User;
    update(user: User): User;
    delete(id: number): boolean;
}

