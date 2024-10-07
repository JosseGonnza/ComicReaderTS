import {Comic} from "../entities/Comic";

export interface IComicCommandRepository{
    save(comic: Comic): Comic;
    delete(comicId: string, userId: string): boolean
}