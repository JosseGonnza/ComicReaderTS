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
        const existingComicIndex = this.comics.findIndex(u => u.id === comic.id);

        if (existingComicIndex !== -1) {
            this.comics[existingComicIndex] = { ...this.comics[existingComicIndex], ...comic };
        } else {
            comic.id = uuidv4();
            this.comics.push(comic);
            this.userComicRepository.saveComicFromUser(userId, comic.id);
        }
        return comic;
    }

    delete(comic: Comic, userId: string): boolean {
        const userComics = this.userComicRepository.getComicsByUserId(userId);
        const index = this.comics.findIndex(comic => comic.id === comic.id);
        if (index === -1 || userComics.find(index.valueOf)) {
            return false;
        }
        this.comics.splice(index, 1);
        return true;
    }

    getAll(): Comic[] {
        return this.comics;
    }

    getById(comicId: string): Comic | undefined {
        return this.comics.find(comic => comic.id === comicId);
    }

    getComicsByUser(userId: string): (Comic | undefined)[] {
        return this.userComicRepository.getComicsByUserId(userId);
    }
}