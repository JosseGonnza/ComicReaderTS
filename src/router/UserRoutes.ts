import { Router } from 'express';
import {UserRepository} from "../user/infrastructure/repositories/UserRepository";
import {UserCommandController} from "../user/infrastructure/controllers/UserCommandController";
import {UserQueryController} from "../user/infrastructure/controllers/UserQueryController";

const router = Router();
const repository = new UserRepository();
const userCommandController = new UserCommandController(repository);
const userQueryController = new UserQueryController(repository);

router.post('/', (req, res) => userCommandController.post(req, res));
router.put('/:id', (req, res) => userCommandController.put(req, res));
router.delete('/:id', (req, res) => userCommandController.delete(req, res));

router.get('/:id', (req, res) => userQueryController.get(req, res));
router.get('/', (req, res) => userQueryController.getAll(req, res));

export default router;