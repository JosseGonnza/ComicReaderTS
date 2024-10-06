import {Router} from "express";
import {UserComicRepository} from "../userComic/infrastructure/repositories/UserComicRepository";
import {ComicRepository} from "../comic/infrastructure/repositories/ComicRepository";
import {ComicCommandController} from "../comic/infrastructure/controllers/ComicCommandController";
import {ComicQueryController} from "../comic/infrastructure/controllers/ComicQueryController";

const router = Router();
const userComicRepo = new UserComicRepository();
const comicRepo = new ComicRepository(userComicRepo);
const commandController = new ComicCommandController(comicRepo);
const queryController = new ComicQueryController(comicRepo);

router.get("/", (req, res) => queryController.getAllComics(req, res));
/**
 * @swagger
 * /api/comics/:
 *      get:
 *          summary: Obtener un listado de comics.
 *          tags:
 *              - Comic
 *          responses:
 *              200:
 *                  description: Comics obtenidos con éxito.
 * */

router.get("/:id", (req, res) => queryController.getComicById(req, res));
/**
 * @swagger
 * /api/comics/{id}:
 *      get:
 *          summary: Obtener un comic mediante el id.
 *          tags:
 *              - Comic
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                description: Id del comic que desea obtener.
 *                schema:
 *                      type: string
 *          responses:
 *              200:
 *                  description: Comic obtenido con éxito.
 *              404:
 *                  description: Comic no encontrado.
 * */

export default router;
