import {UserComic} from "../entities/UserComic";
import {User} from "../../../user/domain/entities/User";

export interface IUserComicCommandRepository{
    saveUser(user: string): void;
    // saveComicFromUser(userId: string, comicId: string): UserComic;
}