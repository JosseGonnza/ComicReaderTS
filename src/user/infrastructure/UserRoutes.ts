import { Router } from 'express';
import {UserRepository} from "./repositories/UserRepository";
import {UserCommandController} from "./controllers/UserCommandController";
import {UserQueryController} from "./controllers/UserQueryController";

const router = Router();
const repository = new UserRepository();
const userCommandController = new UserCommandController(repository);
const userQueryController = new UserQueryController(repository);

// Commands
router.post('/', (req, res) => userCommandController.post(req, res));
router.put('/:id', (req, res) => userCommandController.put(req, res));
router.delete('/:id', (req, res) => userCommandController.delete(req, res));

// Queries
router.get('/:id', (req, res) => userQueryController.get(req, res));
router.get('/', (req, res) => userQueryController.getAll(req, res));

export default router;