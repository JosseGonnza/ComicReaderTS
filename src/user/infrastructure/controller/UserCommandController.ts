import { Request, Response } from 'express';
import {DeleteUser, DeleteUserRequest} from "../../application/useCases/DeleteUser";
import {UpdateUser, UpdateUserRequest} from "../../application/useCases/UpdateUser";
import {FakeRepository} from "../repositories/FakeRepository";
import {CreateUser, CreateUserRequest} from "../../application/useCases/CreateUser";

export class UserCommandController {
    private createUser: CreateUser;
    private updateUser: UpdateUser;
    private deleteUser: DeleteUser;

    constructor(repository: FakeRepository) {
        this.createUser = new CreateUser(repository);
        this.updateUser = new UpdateUser(repository);
        this.deleteUser = new DeleteUser(repository);
    }

    post(req: Request, res: Response): void {
        const request: CreateUserRequest = req.body;
        const user = this.createUser.execute(request);
        res.status(201).json({ message: "User created", user: user });
    }

    put(req: Request, res: Response): void {
        const { id } = req.params;  // Obtener el ID de la URL
        const request: UpdateUserRequest = req.body;
        request.id = id;  // Asegurar que el ID esté en el request

        const user = this.updateUser.execute(request);
        if (user) {
            res.status(200).json({ message: "User updated", updatedUser: user });
        } else {
            res.status(404).send("User not found");
        }
    }

    delete(req: Request, res: Response): void {
        const request: DeleteUserRequest = { id: req.params.id };
        const deleted = this.deleteUser.execute(request);
        if (deleted) {
            res.status(204).send("User deleted");
        } else {
            res.status(404).send("User not found");
        }
    }
}
