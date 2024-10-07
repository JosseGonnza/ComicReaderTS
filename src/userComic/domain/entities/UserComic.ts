import {User} from "../../../user/domain/entities/User";
import {Comic} from "../../../comic/domain/entities/Comic";

export class UserComic {
    public userId: string;
    public comicIds: string[];

    public user: User | undefined;
    public comic: Comic | undefined;

    constructor(userId: string, comicIds: string[]) {
        this.userId = userId;
        this.comicIds = comicIds;
    }
}