import {UserComic} from "../../../userComic/domain/entities/UserComic";
import {Comic} from "../entities/Comic";
import {User} from "../../../user/domain/entities/User";

export interface IComicCommandRepository{
    addComicToUser(user: User, comic: Comic): UserComic;
    removeComicFromUser(userId: string, comicId: string): boolean;
}