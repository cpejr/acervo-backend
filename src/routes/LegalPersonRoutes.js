import { Router } from 'express';

// import * as BaseUserController from '../controllers/BaseUserController.js';
import * as LegalPersonController from '../controllers/LegalPersonController.js';

const LegalPersonRoutes = Router();

LegalPersonRoutes.route('/')
  .get(LegalPersonController.get)
  .post(LegalPersonController.create);

LegalPersonRoutes.route('/:_id')
  .get(LegalPersonController.getById)
  .put(LegalPersonController.update)
  .delete(LegalPersonController.destroy);

LegalPersonRoutes.put('/:token', LegalPersonController.verifyEmail);

export default LegalPersonRoutes;
