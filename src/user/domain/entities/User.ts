import {UserComic} from "../../../userComic/domain/entities/UserComic";

export class User {
    id: string;
    nickName: string;
    email: string;
    password: string;
    phone: string;
    userComics: UserComic[]; // Relación con tabla intermedia

    constructor(nickName: string, email: string, password: string, phone: string) {
        this.id = ''; // ID se genera al guardar un user
        this.nickName = nickName;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.userComics = []; // Relación vacía al crearse el user
    }
}

export interface User {
    id: string;
    nickName: string;
    email: string;
    password: string;
    phone: string;
}