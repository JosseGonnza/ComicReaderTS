import {IComicQueryRepository} from "../../domain/ports/IComicQueryRepository";
import {IComicCommandRepository} from "../../domain/ports/IComicCommandRepository";
import {UserComicRepository} from "../../../userComic/infrastructure/repositories/UserComicRepository";
import { Comic } from "../../domain/entities/Comic";
import { v4 as uuidv4 } from 'uuid';

export class ComicRepository implements IComicCommandRepository, IComicQueryRepository {
    private comics: Comic[] = [];
    private userComicRepository: UserComicRepository;

    constructor(userComicRepository: UserComicRepository) {
        this.userComicRepository = userComicRepository;
    }

    save(comic: Comic, userId: string): Comic {
        comic.id = uuidv4();
        this.comics.push(comic);
        this.userComicRepository.save(userId, comic.id);
        return comic;
    }

    getAll(): Comic[] {
        return this.comics;
    }

    getById(comicId: string): Comic | undefined {
        return this.comics.find(comic => comic.id === comicId);
    }
}