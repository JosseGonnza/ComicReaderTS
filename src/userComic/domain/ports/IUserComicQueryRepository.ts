import {User} from "../../../user/domain/entities/User";

export interface IUserComicQueryRepository{
    getComicsByUserId(userId: string): string[];
    getUsersByComicId(comicId: string): (User | undefined)[];
}