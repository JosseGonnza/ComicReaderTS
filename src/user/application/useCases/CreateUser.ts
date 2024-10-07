import {UserRepository} from "../../infrastructure/repositories/UserRepository";
import {UserComic} from "../../../userComic/domain/entities/UserComic";
import {User} from "../../domain/entities/User";
import {UserComicRepository} from "../../../userComic/infrastructure/repositories/UserComicRepository";

export class CreateUser {
    private userComicRepository: UserComicRepository;
    private userRepository: UserRepository;

    constructor(userRepository: UserRepository, userComicRepository: UserComicRepository) {
        this.userRepository = userRepository;
        this.userComicRepository = userComicRepository;
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
        this.userComicRepository.saveUser(newUser.id);
        return this.userRepository.save(newUser);
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

