import express from "express";
import userRoutes from "./UserRoutes";
import comicRoutes from "./ComicRoutes";

const router = express.Router();

// Rutas que exportamos a app.ts
router.use('/api/users', userRoutes);
router.use('/api/comics', comicRoutes);

export default router;

//TODO: Creando componentes para swagger
// Seguridad
/**
 * @swagger
 * components:
 *      securitySchemes:
 *          apiAuth:
 *              type: apiKey
 *              in: header
 *              name: authorization
 * */

//TODO:
// Esquema de la request de usuarios
/**
 * @swagger
 * components:
 *      schemas:
 *          UserSchema:
 *              type: object
 *              properties:
 *                  nickName:
 *                      type: string
 *                      description: Nombre de usuario.
 *                  email:
 *                      type: string
 *                      format: email
 *                      description: Correo electrónico del usuario
 *                  password:
 *                      type: string
 *                      pattern: ^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$
 *                      description: Contraseña del usuario.
 *                  phone:
 *                      type: string
 *                      description: Número de teléfono del usuario.
 *              required:
 *                      - nickName
 *                      - email
 *                      - password
 *                      - phone
 * */

//TODO:
// Esquema de la request de comics
/**
 * @swagger
 * components:
 *      schemas:
 *          ComicSchema:
 *              type: object
 *              properties:
 *                  name:
 *                      type: string
 *                      description: Nombre del comic.
 *                  author:
 *                      type: string
 *                      description: Nombre del autor.
 *                  tomos:
 *                      type: array
 *                      description: Lista de tomos.
 *              required:
 *                      - name
 *                      - author
 *                      - tomos
 * */