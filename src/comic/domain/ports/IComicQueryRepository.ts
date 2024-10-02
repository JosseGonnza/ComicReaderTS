import {Comic} from "../entities/Comic";

export interface IComicQueryRepository{
    getAll(): Comic[];
    getById(comicId: string): Comic | undefined;
}