import {User} from "../../../user/domain/entities/User";

export interface IUserComicQueryRepository{
    getUserById(userId: string): string;
    // getComicsByUserId(userId: string): string[];
    // getUsersByComicId(comicId: string): (User | undefined)[];
}