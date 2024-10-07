import {GetUserRequest} from "../../../user/application/useCases/GetUser";
import {GetUser, GetUserComicRequest} from "../../application/useCases/GetUser";
import {UserRepository} from "../../../user/infrastructure/repositories/UserRepository";
import {UserComicRepository} from "../repositories/UserComicRepository";
import { Request, Response } from 'express';

export class UserComicQueryController {
    private getUser: GetUser;

    constructor(repository: UserComicRepository) {
        this.getUser = new GetUser(repository);
    }

    getUserFromUserComic(req: Request, res: Response): void {
        const request: GetUserComicRequest = { id: req.params.userId };
        const user = this.getUser.execute(request);
        if (user) {
            res.status(200).json(user);
        } else {
            res.status(404).send("User not found");
        }
    }
}