import { Comic } from "../../../comic/domain/entities/Comic";
import { User } from "../../../user/domain/entities/User";
import {UserComic} from "../../domain/entities/UserComic";
import {IUserComicCommandRepository} from "../../domain/ports/IUserComicCommandRepository";
import {IUserComicQueryRepository} from "../../domain/ports/IUserComicQueryRepository";

export class UserComicRepository implements IUserComicCommandRepository, IUserComicQueryRepository {
    private userComics: UserComic[] = [];

    save(userId: string, comicId: string): UserComic {
        const userComic = new UserComic(userId, comicId);
        this.userComics.push(userComic);
        return userComic;
    }

    getComicsByUserId(userId: string): (Comic | undefined)[] {
        return this.userComics
            .filter(uc => uc.userId === userId)
            .map(uc => uc.comic);
    }

    getUsersByComicId(comicId: string): (User | undefined)[] {
        return this.userComics
            .filter(uc => uc.comicId === comicId)
            .map(uc => uc.user);
    }

}