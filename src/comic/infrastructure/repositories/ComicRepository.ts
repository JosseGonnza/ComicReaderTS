import {IComicQueryRepository} from "../../domain/ports/IComicQueryRepository";
import {IComicCommandRepository} from "../../domain/ports/IComicCommandRepository";
import {Comic} from "../../domain/entities/Comic";
import {v4 as uuidv4} from 'uuid';

export class ComicRepository implements IComicCommandRepository, IComicQueryRepository {
    private comics: Comic[] = [];
    // private userComicRepository: UserComicRepository;
    //
    // constructor(userComicRepository: UserComicRepository) {
    //     this.userComicRepository = userComicRepository;
    // }

    save(comic: Comic): Comic {
        // const existingComicIndex = this.comics.findIndex(u => u.id === comic.id);
        // if (existingComicIndex !== -1) {
        //     this.comics[existingComicIndex] = { ...this.comics[existingComicIndex], ...comic };
        //     throw new Error("Comic is exist.")
        // } else {
            comic.id = uuidv4();
            this.comics.push(comic);
            // this.userComicRepository.saveComicFromUser(userId, comic.id);
        // }
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