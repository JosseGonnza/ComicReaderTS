import {IUserComicCommandRepository} from "../../domain/ports/IUserComicCommandRepository";
import {IUserComicQueryRepository} from "../../domain/ports/IUserComicQueryRepository";
import {UserComic} from "../../domain/entities/UserComic";

export class UserComicRepository implements IUserComicCommandRepository, IUserComicQueryRepository {
    private userComics: UserComic[] = [];

    saveUser(user: string) {
        const userComic = new UserComic(user, "");
        this.userComics.push(userComic);
    }

    getUserById(userId: string): string {
        const userExist = this.userComics.find(u => u.userId === userId);
        if (!userExist) {
            throw new Error("User id does not exist.");
        }
        return userExist.userId;
    }

    // saveComicFromUser(userId: string, comicId: string): UserComic {
    //     const userComic = new UserComic(userId, comicId);
    //     this.userComics.push(userComic);
    //     console.log(this.userComics);
    //     return userComic;
    // }
    //
    // getComicsByUserId(userId: string): string[] {
    //     const userExists = this.userComics.some(uc => uc.userId === userId);
    //     if (!userExists) {
    //         throw new Error(`User with ID ${userId} not found.`);
    //     }
    //     // Devuelve los comicIds asociados al userId
    //     return this.userComics
    //         .filter(uc => uc.userId === userId)
    //         .map(uc => uc.comicId);
    // }
    //
    // getUsersByComicId(comicId: string): (User | undefined)[] {
    //     return this.userComics
    //         .filter(uc => uc.comicId === comicId)
    //         .map(uc => uc.user);
    // }
}