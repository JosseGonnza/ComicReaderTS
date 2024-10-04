import {Chapter} from "./Chapter";
import {v4 as uuidv4} from "uuid";

export class Tomo{
    id = uuidv4();
    number: number
    chapters: Chapter[];

    constructor(id: string, number: number, chapters: Chapter[]) {
        this.id = id;
        this.number = number;
        this.chapters = [];
    }
}