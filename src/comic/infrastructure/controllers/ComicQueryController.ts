import { Request, Response } from "express";
import {ComicRepository} from "../repositories/ComicRepository";

export class ComicQueryController {
    private comicRepository: ComicRepository;

    constructor(comicRepository: ComicRepository) {
        this.comicRepository = comicRepository;
    }

    getAllComics(req: Request, res: Response): void {
        const comics = this.comicRepository.getAll();
        res.status(200).json(comics);
    }

    getComicById(req: Request, res: Response): void {
        const comicId = req.params.id;
        const comic = this.comicRepository.getById(comicId);
        if (!comic) {
            res.status(404).json({ message: "Comic not found" });
        } else {
            res.status(200).json(comic);
        }
    }

    getComicsFromUser(req: Request, res: Response): void {
        const userId = req.params.userId;
        const comics = this.comicRepository.getComicsByUser(userId);
        if (comics.length !== 0) {
            res.status(200).json(comics);
        } else {
            res.status(404).json({message: "No comics found for this user"});
        }
    }
}