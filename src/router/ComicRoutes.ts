// src/routes/comicRoutes.ts
import { Router } from "express";
import {UserComicRepository} from "../userComic/infrastructure/repositories/UserComicRepository";
import {ComicRepository} from "../comic/infrastructure/repositories/ComicRepository";
import {ComicCommandController} from "../comic/infrastructure/controllers/ComicCommandController";
import {ComicQueryController} from "../comic/infrastructure/controllers/ComicQueryController";

const router = Router();
const userComicRepo = new UserComicRepository();
const comicRepo = new ComicRepository(userComicRepo);
const commandController = new ComicCommandController(comicRepo);
const queryController = new ComicQueryController(comicRepo);


router.post("/:userId/comics", (req, res) => commandController.createComic(req, res));
/**
 * @swagger
 * /api/comics/{userId}/comics:
 *      post:
 *          summary: Endpoint para guardar un comic de un usuario concreto
 *          tags:
 *              - Comic
 *          parameters:
 *              - in: path
 *                name: userId  # Ajustado a 'userId'
 *                required: true
 *                description: Id del usuario en el que desea guardar el comic.
 *                schema:
 *                      type: string
 *          requestBody:
 *              description: Esquema para guardar un usuario
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/ComicSchema'
 *          responses:
 *              201:
 *                  description: Comic guardado.
 *              500:
 *                  description: Error interno del servidor.
 */

router.delete("/:id", (req, res) => commandController.deleteComic(req, res));

router.get("/", (req, res) => queryController.getAllComics(req, res));
router.get("/:id", (req, res) => queryController.getComicById(req, res));
router.get("/:userId/comics", (req, res) => queryController.getComicsByUser(req, res));

export default router;
