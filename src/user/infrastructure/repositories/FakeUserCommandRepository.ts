import {User} from "../../domain/entities/User";
import {IUserCommandRepository} from "../../domain/ports/IUserCommandRepository";

export class FakeUserCommandRepository implements IUserCommandRepository {
    private users: User[] = [];
    private id: number = 1;

    save(user: User): User {
        const newUser = {
            ...user,    //Sin esto no retorno un objeto user
            id: this.id++
        }
        //TODO: No puedo hacer esto 🥲
        // let newUser = this.users.push(user);
        this.users.push(newUser)
        return newUser;
    }

    update(user: User): User {
        throw new Error("Method not implemented.");
    }

    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }

}