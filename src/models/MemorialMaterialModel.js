import mongoose from 'mongoose';

import MaterialModel, { discriminatorKey } from './MaterialModel.js';

const MemorialMaterialModel = MaterialModel.discriminator(
  'MemorialMaterial',
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
