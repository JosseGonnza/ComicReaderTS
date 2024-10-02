import {UserRepository} from "../../infrastructure/repositories/UserRepository";


export class DeleteUser{
    private repository: UserRepository;

    constructor(repository: UserRepository) {
        this.repository = repository;
    }

    execute(request: DeleteUserRequest): boolean{
        return this.repository.delete(request.id)
    }
}

export interface DeleteUserRequest {
    id: string;
}
