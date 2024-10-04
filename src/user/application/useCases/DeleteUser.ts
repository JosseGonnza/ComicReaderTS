import {UserRepository} from "../../infrastructure/repositories/UserRepository";

//TODO: Hacer DeleteComic un useCases
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
