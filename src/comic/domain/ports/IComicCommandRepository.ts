import {Comic} from "../entities/Comic";

export interface IComicCommandRepository{
    save(comic: Comic, userId: string): Comic;
    delete(comicId: string): boolean
}