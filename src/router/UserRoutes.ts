import { Router } from 'express';
import {UserRepository} from "../user/infrastructure/repositories/UserRepository";
import {UserCommandController} from "../user/infrastructure/controllers/UserCommandController";
import {UserQueryController} from "../user/infrastructure/controllers/UserQueryController";

const router = Router();
const repository = new UserRepository();
const userCommandController = new UserCommandController(repository);
const userQueryController = new UserQueryController(repository);

router.post('/', (req, res) => userCommandController.post(req, res));
//TODO: Componente para swagger
/**
 * @swagger
 * /api/users/:
 *      post:
 *          summary: Guardar un usuario
 *          tags:
 *              - User
 *          requestBody:
 *              description: Esquema para guardar un usuario
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UserSchema'
 *          responses:
 *              201:
 *                  description: Usuario creado.
 *              500:
 *                  description: Error interno del servidor.
 * */

router.put('/:id', (req, res) => userCommandController.put(req, res));
/**
 * @swagger
 * /api/users/{id}:
 *      put:
 *          summary: Modificar un usuario mediante el id.
 *          tags:
 *              - User
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                description: Id del usuario que desea modificar.
 *                schema:
 *                      type: string
 *          requestBody:
 *              description: Esquema para guardar un usuario
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          $ref: '#/components/schemas/UserSchema'
 *          responses:
 *              200:
 *                  description: Usuario modificado con éxito.
 *              404:
 *                  description: Usuario no encontrado.
 * */

router.delete('/:id', (req, res) => userCommandController.delete(req, res));
/**
 * @swagger
 * /api/users/{id}:
 *      delete:
 *          summary: Eliminar un usuario mediante el id.
 *          tags:
 *              - User
 *          parameters:
 *              - in: path
 *                name: id
 *                required: true
 *                description: Id del usuario que desea eliminar.
 *                schema:
 *                      type: string
 *          responses:
 *              204:
 *                  description: Usuario eliminado con éxito.
 *              404:
 *                  description: Usuario no encontrado.
 * */

router.get('/:id', (req, res) => userQueryController.get(req, res));
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
/**
 * @swagger
 * /api/users/:
 *      get:
 *          summary: Obtener un listado de usuarios.
 *          tags:
 *              - User
 *          responses:
 *              200:
 *                  description: Usuarios obtenidos con éxito.
 * */

export default router;