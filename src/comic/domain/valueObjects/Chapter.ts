export class Chapter{
    id: string;
    number: number;
    name: string;
    dateOfPublication: Date;
    isRead: boolean;

    constructor(id: string, number: number, name: string, dateOfPublication: Date, isRead: boolean) {
        this.id = id;
        this.number = number;
        this.name = name;
        this.dateOfPublication = dateOfPublication;
        this.isRead = isRead;
    }
}