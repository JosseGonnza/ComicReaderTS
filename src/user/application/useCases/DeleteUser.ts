import {FakeRepository} from "../../infrastructure/repositories/FakeRepository";


export class DeleteUser{
    private repository: FakeRepository;

    constructor(repository: FakeRepository) {
        this.repository = repository;
    }

    execute(request: DeleteUserRequest): boolean{
        return this.repository.delete(request.id)
    }
}

export interface DeleteUserRequest {
    id: string;
}
