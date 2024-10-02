import {User} from "../../../user/domain/entities/User";
import {Comic} from "../../../comic/domain/entities/Comic";

export class UserComic {
    public userId: string;
    public comicId: string;

    public user: User | undefined;
    public comic: Comic | undefined;

    constructor(userId: string, comicId: string) {
        this.userId = userId;
        this.comicId = comicId;
    }
}