import {FakeRepository} from "../../infrastructure/repositories/FakeRepository";
import {User} from "../../domain/entities/User";

export class GetUser {
    private repository: FakeRepository;

    constructor(repository: FakeRepository) {
        this.repository = repository;
    }

    execute(request: GetUserRequest): User | undefined {
        return this.repository.getById(request.id);
    }
}

export interface GetUserRequest {
    id: string;
}