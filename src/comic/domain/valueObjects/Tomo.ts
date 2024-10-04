import {Chapter} from "./Chapter";

export class Tomo{
    id: string;
    number: string;
    chapters: Chapter[];

    constructor(id: string, number: string, chapters: Chapter[]) {
        this.id = id;
        this.number = number;
        this.chapters = [];
    }
}