import {Router} from "express";
import {UserComicRepository} from "../userComic/infrastructure/repositories/UserComicRepository";
import {ComicRepository} from "../comic/infrastructure/repositories/ComicRepository";
import {ComicCommandController} from "../comic/infrastructure/controllers/ComicCommandController";
import {ComicQueryController} from "../comic/infrastructure/controllers/ComicQueryController";

const router = Router();
const userComicRepo = new UserComicRepository();
const comicRepo = new ComicRepository(userComicRepo);
const queryController = new ComicQueryController(comicRepo);
const commandController = new ComicCommandController(comicRepo, userComicRepo);

router.post("/:userId", (req, res) => commandController.saveComic(req, res));
/**
 * @swagger
 * /api/comics/{id}:
 *      post:
 *          summary: Guardar un comic en un usuario
 *          tags:
 *              - Comic
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                description: Id del user que desea guardar el comic.
 *                schema:
 *                      type: string
 *          requestBody:
 *              description: Esquema para guardar un comic
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

router.get("/", (req, res) => queryController.getAllComics(req, res));
/**
 * @swagger
 * /api/comics:
 *      get:
 *          summary: Obtener un listado de comics.
 *          tags:
 *              - Comic
 *          responses:
 *              200:
 *                  description: Comics obtenidos con éxito.
 * */

// router.get("/:id", (req, res) => queryController.getComicById(req, res));
// /**
//  * @swagger
//  * /api/comics/{id}:
//  *      get:
//  *          summary: Obtener un comic mediante el id.
//  *          tags:
//  *              - Comic
//  *          parameters:
//  *              - in: path
//  *                name: id
//  *                required: true
//  *                description: Id del comic que desea obtener.
//  *                schema:
//  *                      type: string
//  *          responses:
//  *              200:
//  *                  description: Comic obtenido con éxito.
//  *              404:
//  *                  description: Comic no encontrado.
//  * */

export default router;
