import {User} from "../entities/User";

export interface IUserCommandRepository {
    save(user: User): User;
    update(id: string, user: Partial<User>): User | undefined;
    delete(id: string): boolean;
}

