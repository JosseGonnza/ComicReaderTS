import express from 'express';
import swaggerUi from "swagger-ui-express";
import swaggerSpec from "./swagger";
import router from "./router/IndexRouter";

const app = express();

app.use(express.json()); // Parsear JSON en el body de las requests

// Ruta
app.use(router);

// Implementar swagger en una url que queramos
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default app;

/**
 * @swagger
 * */