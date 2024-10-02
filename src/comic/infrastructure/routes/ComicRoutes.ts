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


router.post("/:userId/comics", (req, res) => commandController.createComic(req, res));
router.delete("/:id", (req, res) => commandController.deleteComic(req, res));

router.get("/", (req, res) => queryController.getAllComics(req, res));
router.get("/:id", (req, res) => queryController.getComicById(req, res));
router.get("/:userId/comics", (req, res) => queryController.getComicsByUser(req, res));

export default router;
