import { Router } from 'express';

import * as LegalPersonController from '../controllers/LegalPersonController.js';
import verifyAdmin from '../middleware/verifyAdmin.js'; // REALMENTE NECESSÁRIO?
import verifyJWT from '../middleware/verifyJWT.js';

const LegalPersonRoutes = Router();

LegalPersonRoutes.route('/')
  .get(verifyJWT, verifyAdmin, LegalPersonController.get)
  .post(LegalPersonController.create);

LegalPersonRoutes.route('/:_id')
  .get(LegalPersonController.getById)
  .put(verifyJWT, LegalPersonController.update)
  .delete(verifyJWT, LegalPersonController.destroy);

export default LegalPersonRoutes;
