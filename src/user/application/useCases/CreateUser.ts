import {User} from "../../domain/entities/User";
import {FakeRepository} from "../../infrastructure/repositories/FakeRepository";

export class CreateUser {
    private repository: FakeRepository;

    constructor(repository: FakeRepository) {
        this.repository = repository;
    }

    execute(request: CreateUserRequest): User {
        const newUser: User = {
            id: "", // Se asignará más adelante
            nickName: request.nickName,
            email: request.email,
            password: request.password,
            phone: request.phone
        };
        return this.repository.save(newUser);
    }
}

export interface CreateUserRequest {
    id: string;
    nickName: string;
    email: string;
    password: string;
    phone: string;
}

