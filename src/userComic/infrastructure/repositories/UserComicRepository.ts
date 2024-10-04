import {IUserComicCommandRepository} from "../../domain/ports/IUserComicCommandRepository";
import {IUserComicQueryRepository} from "../../domain/ports/IUserComicQueryRepository";
import {UserComic} from "../../domain/entities/UserComic";
import {User} from "../../../user/domain/entities/User";

export class UserComicRepository implements IUserComicCommandRepository, IUserComicQueryRepository {
    private userComics: UserComic[] = [];

    saveComicFromUser(userId: string, comicId: string): UserComic {
        const userComic = new UserComic(userId, comicId);
        this.userComics.push(userComic);
        return userComic;
    }

    getComicsByUserId(userId: string): string[] {
        const userExists = this.userComics.some(uc => uc.userId === userId);
        if (!userExists) {
            throw new Error(`User with ID ${userId} not found.`);
        }
        // Devuelve los comicIds asociados al userId
        return this.userComics
            .filter(uc => uc.userId === userId)
            .map(uc => uc.comicId);
    }

    getUsersByComicId(comicId: string): (User | undefined)[] {
        return this.userComics
            .filter(uc => uc.comicId === comicId)
            .map(uc => uc.user);
    }
}