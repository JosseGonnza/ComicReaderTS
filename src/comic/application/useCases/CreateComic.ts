import {UserComic} from "../../../userComic/domain/entities/UserComic";
import {ComicRepository} from "../../infrastructure/repositories/ComicRepository";
import {Comic} from "../../domain/entities/Comic";
import {Tomo} from "../../domain/valueObjects/Tomo";
import {User} from "../../../user/domain/entities/User";

export class CreateComic {
    private repository: ComicRepository;

    constructor(repository: ComicRepository) {
        this.repository = repository;
    }

    execute(request: CreateComicRequest, user: User): Comic {
        const newComic: Comic = {
            id: "",
            name: request.name,
            author: request.author,
            tomos: request.tomos,
            userComics: request.userComics
        };
        return this.repository.save(newComic, user.id);
    }
}

export interface CreateComicRequest {
    id: string;
    name: string;
    author: string;
    tomos: Tomo[];
    userComics: UserComic[];
}

