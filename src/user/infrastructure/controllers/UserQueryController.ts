import { Request, Response } from 'express';
import {UserRepository} from "../repositories/UserRepository";
import {GetAllUsers} from "../../application/useCases/GetAllUsers";
import {GetUser, GetUserRequest} from "../../application/useCases/GetUser";

export class UserQueryController{
    private getUser: GetUser;
    private getAllUsers: GetAllUsers;

    constructor(repository: UserRepository) {
        this.getUser = new GetUser(repository);
        this.getAllUsers = new GetAllUsers(repository);
    }

    get(req: Request, res: Response): void {
        const request: GetUserRequest = { id: req.params.id };
        const user = this.getUser.execute(request);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send("User not found");
        }
    }

    getAll(req: Request, res: Response): void {
        const users = this.getAllUsers.execute();
        res.status(200).json(users);
    }
}