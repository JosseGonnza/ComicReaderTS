import { Router } from 'express';
import {UserRepository} from "../user/infrastructure/repositories/UserRepository";
import {UserCommandController} from "../user/infrastructure/controllers/UserCommandController";
import {UserQueryController} from "../user/infrastructure/controllers/UserQueryController";

const router = Router();
const repository = new UserRepository();
const userCommandController = new UserCommandController(repository);
const userQueryController = new UserQueryController(repository);

router.post('/', (req, res) => userCommandController.post(req, res));
/**
 * @swagger
 * /api/users/:
 *      post:
 *          summary: Endpoint para guardar un usuario
 *          tags:
 *              - User
 *          requestBody:
 *              description: Esquema de Post
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/PostUserSchema'
 *          responses:
 *              201:
 *                  description: Usuario creado.
 *              500:
 *                  description: Error interno del servidor.
 * */

router.put('/:id', (req, res) => userCommandController.put(req, res));
router.delete('/:id', (req, res) => userCommandController.delete(req, res));

router.get('/:id', (req, res) => userQueryController.get(req, res));
//TODO: Componente para swagger
/**
 * @swagger
 * /api/users/{id}:
 *      get:
 *          summary: Obtener un usuario mediante el id.
 *          tags:
 *              - User
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                description: Id del usuario que desea obtener.
 *                schema:
 *                      type: string
 *          responses:
 *              200:
 *                  description: Usuario obtenido con éxito.
 *              404:
 *                  description: Usuario no encontrado.
 * */

router.get('/', (req, res) => userQueryController.getAll(req, res));

export default router;