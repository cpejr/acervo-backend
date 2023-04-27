import mongoose from 'mongoose';

import { TABLE_NAMES } from '../utils/general/constants.js';
import FileSchema from '../utils/libs/mongoose/subdocuments/FilseSchema.js';

const EventSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: [
        'Artes',
        'Cultural',
        'Esportes',
        'Acadêmico',
        'Premiações',
        'Palestras',
        'Religião',
        'Entreterimento',
      ],
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    multimedia: FileSchema,
  },
  { timestamps: true }
);

const EventModel = mongoose.model(TABLE_NAMES.EVENT, EventSchema);
export default EventModel;
