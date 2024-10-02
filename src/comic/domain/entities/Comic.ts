import {UserComic} from "../../../userComic/domain/entities/UserComic";
import {Tomo} from "../valueObjects/Tomo";

export class Comic {
    id: string;
    name: string;
    author: string;
    tomos: Tomo[];
    userComics: UserComic[];

    constructor(name: string, author: string, tomos: Tomo[]) {
        this.id = '';
        this.name = name;
        this.author = author;
        this.tomos = [];
        this.userComics = [];
    }
}