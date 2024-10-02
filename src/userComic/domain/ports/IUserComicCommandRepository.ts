import {UserComic} from "../entities/UserComic";

export interface IUserComicCommandRepository{
    save(userId: string, comicId: string): UserComic;
}