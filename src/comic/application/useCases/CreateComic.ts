import {UserComicRepository} from "../../../userComic/infrastructure/repositories/UserComicRepository";
import {ComicRepository} from "../../infrastructure/repositories/ComicRepository";
import {UserComic} from "../../../userComic/domain/entities/UserComic";
import {Comic} from "../../domain/entities/Comic";
import {Tomo} from "../../domain/valueObjects/Tomo";
import {v4 as uuidv4} from "uuid";

export class CreateComic {
    private comicRepository: ComicRepository;
    private userComicRepository: UserComicRepository;

    constructor(comicRepository: ComicRepository, userComicRepository: UserComicRepository) {
        this.comicRepository = comicRepository;
        this.userComicRepository = userComicRepository;
    }

    execute(request: CreateComicRequest, userId: string): Comic {
        const user = this.userComicRepository.getUserById(userId);
        const newComic: Comic = {
            id: uuidv4(),
            name: request.name,
            author: request.author,
            tomos: request.tomos,
            userComics: request.userComics
        };
        this.userComicRepository.saveComicFromUser(user.userId, newComic.id);
        return this.comicRepository.save(newComic);
    }
}

export interface CreateComicRequest {
    id: string;
    name: string;
    author: string;
    tomos: Tomo[];
    userComics: UserComic[];
}

