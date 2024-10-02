import express from 'express';
import bodyParser from 'body-parser';
import userRoutes from "./user/infrastructure/UserRoutes";
import comicRoutes from "./comic/infrastructure/routes/ComicRoutes";

const app = express();

app.use(bodyParser.json()); // Parsear JSON en el body de las requests

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/comics', comicRoutes);

export default app;
