import {Router} from "express";
import {UserComicRepository} from "../userComic/infrastructure/repositories/UserComicRepository";
import {UserComicQueryController} from "../userComic/infrastructure/controllers/UserComicQueryController";

const router = Router();
const userComicRepo = new UserComicRepository();
const queryController = new UserComicQueryController(userComicRepo);

router.get("/userId/", (req, res) => queryController.getUserFromUserComic(req, res));
/**
 * @swagger
 * /api/relations/{id}/:
 *      get:
 *          summary: Devolver un usuario
 *          tags:
 *              - Relations
 *          parameters:
 *              - in: path
 *                name: userId
 *                required: true
 *                description: Id del usuario que desea devolver
 *                schema:
 *                      type: string
 *          responses:
 *              201:
 *                  description: Usuario devuelto.
 *              500:
 *                  description: Error interno del servidor.
 */

// router.get("/:userId/", (req, res) => queryController.getComicsFromUser(req, res));
// /**
//  * @swagger
//  * /api/users/{id}/comics:
//  *      get:
//  *          summary: Listar los comic de un usuario concreto
//  *          tags:
//  *              - User-Comic
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
//
// router.post("/:userId/", (req, res) => commandController.saveComic(req, res));
// /**
//  * @swagger
//  * /api/users/{id}:
//  *      post:
//  *          summary: Guardar un comic de un usuario concreto
//  *          tags:
//  *              - User-Comic
//  *          parameters:
//  *              - in: path
//  *                name: userId
//  *                required: true
//  *                description: Id del usuario en el que desea guardar el comic.
//  *                schema:
//  *                      type: string
//  *          requestBody:
//  *              description: Esquema para guardar un usuario
//  *              required: true
//  *              content:
//  *                  application/json:
//  *                      schema:
//  *                          $ref: '#/components/schemas/ComicSchema'
//  *          responses:
//  *              201:
//  *                  description: Comic guardado.
//  *              500:
//  *                  description: Error interno del servidor.
//  */
//
// router.delete("/:userId/:comicId", (req, res) => commandController.deleteComic(req, res));
// /**
//  * @swagger
//  * /api/users/{id}/{id}:
//  *      delete:
//  *          summary: Eliminar un comic de un usuario concreto
//  *          tags:
//  *              - User-Comic
//  *          parameters:
//  *              - in: path
//  *                name: userId
//  *                required: true
//  *                description: Id del usuario
//  *              - in: path
//  *                name: comicId
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

export default router;
