import {v4 as uuidv4} from "uuid";

export class Chapter{
    id: string;
    number: string;
    name: string;
    dateOfPublication: Date;
    isRead: boolean;

    constructor(id: string, number: string, name: string, dateOfPublication: Date, isRead: boolean) {
        this.id = id;
        this.number = number;
        this.name = name;
        this.dateOfPublication = dateOfPublication;
        this.isRead = isRead;
    }
}