import {User} from "../../domain/entities/User";
import {FakeRepository} from "../../infrastructure/repositories/FakeRepository";

export class UpdateUser {
    private repository: FakeRepository;

    constructor(repository: FakeRepository) {
        this.repository = repository;
    }

    execute(request: UpdateUserRequest): User {
        const updatedUser = this.repository.update(request.id, request);
        if (!updatedUser) {
            throw new Error('User not found or update failed');
        }
        return updatedUser;
    }
}

export interface UpdateUserRequest {
    id: string;
    nickName: string;
    email: string;
    password: string;
    phone: string;
}
