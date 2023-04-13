import mongoose from 'mongoose';

import { FileSchema } from './FileModel.js';

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

const EventModel = mongoose.model('Event', EventSchema);
export default EventModel;
