import {UserRepository} from "../../infrastructure/repositories/UserRepository";
import {User} from "../../domain/entities/User";

export class GetUser {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    execute(request: GetUserRequest): User | undefined {
        return this.repository.getById(request.id);
    }
}

export interface GetUserRequest {
    id: string;
}