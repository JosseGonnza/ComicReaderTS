import { Router } from 'express';
import {FakeRepository} from "./repositories/FakeRepository";
import {UserCommandController} from "./controller/UserCommandController";
import {UserQueryController} from "./controller/UserQueryController";

const router = Router();
const repository = new FakeRepository();
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