import {IUserCommandRepository} from "../../domain/ports/IUserCommandRepository";
import {IUserQueryRepository} from "../../domain/ports/IUserQueryRepository";
import {User} from "../../domain/entities/User";
import {v4 as uuidv4} from "uuid"

export class UserRepository implements IUserCommandRepository, IUserQueryRepository{
    private users: User[] = [];

    getAll(): User[] {
        return this.users;
    }

    getById(id: string): User | undefined {
        return this.users.find(user => user.id === id);
    }

    save(user: User): User {
        const existingUserIndex = this.users.findIndex(u => u.id === user.id);
        if (existingUserIndex !== -1) {
            this.users[existingUserIndex] = { ...this.users[existingUserIndex], ...user };
        } else {
            user.id = uuidv4();
            this.users.push(user);
        }
        return user;
    }

    update(id: string, userData: Partial<User>): User | undefined {
        const user = this.getById(id);
        if (user) {
            Object.assign(user, userData);
            this.save(user);
            return user;
        }
        return undefined;
    }

    delete(id: string): boolean {
        const index = this.users.findIndex(user => user.id === id);
        if (index !== -1) {
            this.users.splice(index, 1);
            return true;
        }
        return false;
    }
}