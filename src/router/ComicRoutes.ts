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


router.post("/:userId/comics", (req, res) => commandController.saveComic(req, res));
/**
 * @swagger
 * /api/comics/{userId}/comics:
 *      post:
 *          summary: Endpoint para guardar un comic de un usuario concreto
 *          tags:
 *              - Comic
 *          parameters:
 *              - in: path
 *                name: userId
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

router.delete("/:userId/:id", (req, res) => commandController.deleteComic(req, res));
//TODO: No funciona aún
// /**
//  * @swagger
//  * /api/comics/{userId}/{id}:
//  *      delete:
//  *          summary: Endpoint para eliminar un comic de un usuario concreto
//  *          tags:
//  *              - Comic
//  *          parameters:
//  *              - in: path
//  *                name: userId
//  *                required: true
//  *                description: Id del usuario
//  *              - in: path
//  *                name: id
//  *                required: true
//  *                description: Id del comic que desea eliminar
//  *                schema:
//  *                      type: string
//  *          responses:
//  *              204:
//  *                  description: Comic borrado.
//  *              500:
//  *                  description: Error interno del servidor.
//  */

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
router.get("/:userId/comics", (req, res) => queryController.getComicsByUser(req, res));
//TODO: No funciona aún
// /**
//  * @swagger
//  * /api/comics/{userId}/comics:
//  *      get:
//  *          summary: Endpoint para listar los comic de un usuario concreto
//  *          tags:
//  *              - User
//  *          parameters:
//  *              - in: path
//  *                name: userId
//  *                required: true
//  *                description: Id del usuario del que desea traer los comics
//  *                schema:
//  *                      type: string
//  *          responses:
//  *              201:
//  *                  description: Listado de comics por usuario.
//  *              500:
//  *                  description: Error interno del servidor.
//  */

export default router;
