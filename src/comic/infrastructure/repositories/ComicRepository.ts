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
            throw new Error("Comic is exist.")
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

    getById(comicId: string): Comic {
        const comic = this.comics.find(comic => comic.id === comicId)
        if (comic === undefined){
            throw new Error("Comic doesn´t exist.")
        }
        return comic;
    }

    getComicsByUser(userId: string): Comic[] {
        // Obtener los comicIds asociados al userId desde userComicRepository
        const comicIds = this.userComicRepository.getComicsByUserId(userId);

        // Obtener el objeto Comic completo para cada comicId
        return comicIds.map(comicId => {
            const comic = this.getById(comicId);
            if (!comic) {
                throw new Error(`Comic with ID ${comicId} not found.`);
            }
            return comic;
        });
    }
}