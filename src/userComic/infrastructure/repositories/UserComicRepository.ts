import {IUserComicCommandRepository} from "../../domain/ports/IUserComicCommandRepository";
import {IUserComicQueryRepository} from "../../domain/ports/IUserComicQueryRepository";
import {UserComic} from "../../domain/entities/UserComic";

export class UserComicRepository implements IUserComicCommandRepository, IUserComicQueryRepository {
    private userComics: UserComic[] = [];

    getUserById(userId: string): UserComic {
        const userComic = this.userComics.find(u => u.userId === userId);
        if (userComic === undefined) {
            throw new Error("User id does not exist.");
        }
        return userComic;
    }

    saveUser(user: string) {
        const userComic = new UserComic(user, []);
        this.userComics.push(userComic);
    }

    saveComicFromUser(userId: string, comicId: string): UserComic {
        const userComic = this.userComics.find(uc => uc.userId === userId);
        if (!userComic) {
            throw new Error('User not found');
        }
        if (userComic.comicIds.includes(comicId)) {
            throw new Error('Comic already exists in the list');
        }
        userComic.comicIds.push(comicId);
        return userComic;
    }


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