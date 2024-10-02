// src/routes/comicRoutes.ts
import { Router } from "express";
import {UserComicRepository} from "../../../userComic/infrastructure/repositories/UserComicRepository";
import {ComicRepository} from "../repositories/ComicRepository";
import {ComicCommandController} from "../controllers/ComicCommandController";
import {ComicQueryController} from "../controllers/ComicQueryController";

const router = Router();
const userComicRepo = new UserComicRepository();
const comicRepo = new ComicRepository(userComicRepo);
const commandController = new ComicCommandController(comicRepo);
const queryController = new ComicQueryController(comicRepo);


router.post("/users/:userId/comics", (req, res) => commandController.createComic(req, res));
router.get("/comics", (req, res) => queryController.getAllComics(req, res));
router.get("/comics/:id", (req, res) => queryController.getComicById(req, res));
router.delete("/comics/:id", (req, res) => commandController.deleteComic(req, res));
router.get("/users/:userId/comics", (req, res) => queryController.getComicsByUser(req, res));

export default router;
