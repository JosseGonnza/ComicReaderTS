import {ComicRepository} from "../repositories/ComicRepository";
import {Comic} from "../../domain/entities/Comic";
import { Request, Response } from "express";
import {CreateComic} from "../../application/useCases/CreateComic";

export class ComicCommandController{
    private comicRepository: ComicRepository;
    private createComic: CreateComic;

    constructor(comicRepository: ComicRepository) {
        this.comicRepository = comicRepository;
        this.createComic = new CreateComic(comicRepository)
    }

    saveComic(req: Request, res: Response): void {
        const { name, author, tomos } = req.body;
        const userId = req.params.userId; // ID del usuario al que se le asignará el cómic

        const newComic = new Comic(name, author, tomos);
        const savedComic = this.comicRepository.save(newComic, userId);

        res.status(201).json({
            message: "Comic created and assigned to user",
            comic: savedComic
        });
    }

    deleteComic(req: Request, res: Response): void {
        const comic = req.body
        const userId = req.body.userId
        const deleted = this.comicRepository.delete(comic, userId);

        if (deleted) {
            res.status(200).json({message: "Comic deleted"});
        } else {
            res.status(404).json({message: "Comic not found"});
        }
    }
}