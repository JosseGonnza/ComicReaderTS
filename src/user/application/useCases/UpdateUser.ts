import {UserRepository} from "../../infrastructure/repositories/UserRepository";
import {User} from "../../domain/entities/User";

export class UpdateUser {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
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
