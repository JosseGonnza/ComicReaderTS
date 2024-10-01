import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from "./user/infrastructure/UserRoutes";

const app = express();

// Middlewares
app.use(bodyParser.json()); // Parsear JSON en el body de las requests

// Rutas
app.use('/user', userRoutes); // Definición de las rutas

export default app;
