import {UserRepository} from "../../infrastructure/repositories/UserRepository";
import {User} from "../../domain/entities/User";

export class GetAllUsers {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    execute(): User[] {
        return this.repository.getAll();
    }
}