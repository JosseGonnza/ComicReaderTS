import {User} from "../../../user/domain/entities/User";
import {Comic} from "../../../comic/domain/entities/Comic";

export class UserComic {
    userId: string;
    comicId: string;
    user: User;
    comic: Comic;

    constructor(user: User, comic: Comic) {
        this.userId = user.id;
        this.comicId = comic.id;
        this.user = user;
        this.comic = comic;
    }
}