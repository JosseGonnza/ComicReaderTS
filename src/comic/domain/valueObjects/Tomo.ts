import {Chapter} from "./Chapter";

export class Tomo{
    id: string;
    number: number
    chapters: Chapter[];

    constructor(id: string, number: number, chapters: Chapter[]) {
        this.id = id;
        this.number = number;
        this.chapters = [];
    }
}