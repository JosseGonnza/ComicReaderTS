import {FakeRepository} from "../../infrastructure/repositories/FakeRepository";
import {User} from "../../domain/entities/User";

export class GetAllUsers {
    private repository: FakeRepository;

    constructor(repository: FakeRepository) {
        this.repository = repository;
    }

    execute(): User[] {
        return this.repository.getAll();
    }
}