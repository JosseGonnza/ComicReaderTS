import {GetUserRequest} from "../../../user/application/useCases/GetUser";
import {User} from "../../../user/domain/entities/User";
import {UserComicRepository} from "../../infrastructure/repositories/UserComicRepository";
import {UserComic} from "../../domain/entities/UserComic";

export class GetUser {
    private repository: UserComicRepository;

    constructor(repository: UserComicRepository) {
        this.repository = repository;
    }

    execute(request: GetUserComicRequest): UserComic {
        return this.repository.getUserById(request.id);
    }
}

export interface GetUserComicRequest {
    id: string;
}
