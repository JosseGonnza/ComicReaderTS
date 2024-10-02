import {User} from "../../domain/entities/User";
import {UserRepository} from "../../infrastructure/repositories/UserRepository";
import {UserComic} from "../../../userComic/domain/entities/UserComic";

export class CreateUser {
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    execute(request: CreateUserRequest): User {
        const newUser: User = {
            id: "", // Se asignará más adelante
            nickName: request.nickName,
            email: request.email,
            password: request.password,
            phone: request.phone,
            userComics: request.userComics
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
    userComics: UserComic[];
}

