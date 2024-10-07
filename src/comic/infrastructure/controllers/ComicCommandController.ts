import { Request, Response } from "express";
import {ComicRepository} from "../repositories/ComicRepository";
import {CreateComic} from "../../application/useCases/CreateComic";
import {Comic} from "../../domain/entities/Comic";
import {UserComicRepository} from "../../../userComic/infrastructure/repositories/UserComicRepository";

export class ComicCommandController{
    private comicRepository: ComicRepository;
    private createComic: CreateComic;

    constructor(comicRepository: ComicRepository, userComicRepository: UserComicRepository) {
        this.comicRepository = comicRepository;
        this.createComic = new CreateComic(comicRepository, userComicRepository);
    }

    saveComic(req: Request, res: Response): void {
        const { name, author, tomos } = req.body;
        const userId = req.params.userId; // ID del usuario al que se le asignará el cómic
        const newComic = new Comic(name, author, tomos);
        const savedComic = this.createComic.execute(newComic, userId);
        res.status(201).json({
            message: "Comic created and assigned to user",
            comic: savedComic
        });
    }

    deleteComic(req: Request, res: Response): void {
        const userId = req.params.userId;
        const comicId = req.params.comicId;
        const deleted = this.comicRepository.delete(comicId, userId);
        if (deleted) {
            res.status(200).json({message: "Comic deleted"});
        } else {
            res.status(404).json({message: "Comic not found"});
        }
    }
}