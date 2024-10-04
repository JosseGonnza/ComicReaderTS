import {UserComic} from "../entities/UserComic";

export interface IUserComicCommandRepository{
    saveComicFromUser(userId: string, comicId: string): UserComic;
}