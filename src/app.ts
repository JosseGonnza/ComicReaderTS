import express from 'express';
import bodyParser from 'body-parser';
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import userRoutes from "./router/UserRoutes";
import comicRoutes from "./router/ComicRoutes";

const app = express();

app.use(bodyParser.json()); // Parsear JSON en el body de las requests

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/comics', comicRoutes);

// Implementar swagger en una url que queramos
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;
