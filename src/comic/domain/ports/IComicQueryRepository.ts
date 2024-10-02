import {Comic} from "../entities/Comic";

export interface IComicQueryRepository{
    getComicsByUserId(userId: string): Comic[];
}