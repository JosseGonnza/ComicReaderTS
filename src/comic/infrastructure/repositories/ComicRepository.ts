import {IComicQueryRepository} from "../../domain/ports/IComicQueryRepository";
import {IComicCommandRepository} from "../../domain/ports/IComicCommandRepository";
import {UserComicRepository} from "../../../userComic/infrastructure/repositories/UserComicRepository";
import {Comic} from "../../domain/entities/Comic";

export class ComicRepository implements IComicCommandRepository, IComicQueryRepository {
    private comics: Comic[] = [];
    private userComicRepository: UserComicRepository;

    constructor(userComicRepository: UserComicRepository) {
        this.userComicRepository = userComicRepository;
    }

    save(comic: Comic): Comic {
        const existingComicIndex = this.comics.findIndex(c => c.name === comic.name);
        if (existingComicIndex !== -1) {
            comic.id = this.comics[existingComicIndex].id;
        }
        this.comics.push(comic);
        return comic;
    }

    delete(comicId: string, userId: string): boolean {
        const userComics = this.getComicsByUser(userId);
        const index = this.comics.findIndex(comic => comic.id === comicId);
        if (index === -1) {
            return false;
        }
        this.comics.splice(index, 1);
        return true;
    }

    getAll(): Comic[] {
        return this.comics;
    }

    getById(comicId: string): Comic {
        const comic = this.comics.find(comic => comic.id === comicId)
        if (comic === undefined){
            throw new Error("Comic does not exist.")
        }
        return comic;
    }

    getComicsByUser(userId: string): Comic[] {
        // const comicIds = this.userComicRepository.getComicsByUserId(userId);
        // return comicIds.map(comicId => {
        //     const comic = this.getById(comicId);
        //     if (!comic) {
        //         throw new Error(`Comic with ID ${comicId} not found.`);
        //     }
        //     return comic;
        // });
        return this.comics;
    }
}