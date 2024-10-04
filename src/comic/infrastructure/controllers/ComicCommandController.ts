import {ComicRepository} from "../repositories/ComicRepository";
import {Comic} from "../../domain/entities/Comic";
import { Request, Response } from "express";

export class ComicCommandController{
    private comicRepository: ComicRepository;

    constructor(comicRepository: ComicRepository) {
        this.comicRepository = comicRepository;
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
        const comicId = req.params.id;
        const deleted = this.comicRepository.delete(comicId);

        if (!deleted) {
            res.status(404).json({ message: "Comic not found" });
        } else {
            res.status(200).json({ message: "Comic deleted" });
        }
    }
}