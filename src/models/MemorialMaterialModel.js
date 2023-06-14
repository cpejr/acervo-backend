import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';
import MaterialModel, { discriminatorKey } from './MaterialModel.js';

const MemorialMaterialModel = MaterialModel.discriminator(
  TABLE_NAMES.MEMORIAL_MATERIAL,
  new mongoose.Schema(
    {
      category: {
        type: String,
        enum: ['Monumentos históricos', 'Acervo fotográfico', 'Vídeos'],
        required: true,
      },
    },
    { discriminatorKey }
  )
);
export default MemorialMaterialModel;
