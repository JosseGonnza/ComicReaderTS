import {UserComic} from "../entities/UserComic";

export interface IUserComicQueryRepository{
    getUserById(userId: string): UserComic;
    // getComicsByUserId(userId: string): string[];
    // getUsersByComicId(comicId: string): (User | undefined)[];
}