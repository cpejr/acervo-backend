import { Router } from 'express';
import * as UserController from '../controllers/UserController.js';

const UserRoutes = Router();

UserRouter.post('/', UserController.create);
UserRoutes.put('/:token', UserController.verifyEmail);
