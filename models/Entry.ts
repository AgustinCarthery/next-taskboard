import { Entry } from '@/interfaces';
import mongoose, { Model, Schema, mongo } from 'mongoose';

interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Number,
  },
  status: {
    type: String,
    enum: {
      values: ['pending', 'in-progress', 'finished'],
      message: '{VALUE} is not allowed',
    },
  },
});

//if already generated model , should not create a new schema
const EntryModel: Model<IEntry> =
  mongoose.models.Entry || mongoose.model('Entry', entrySchema);

export default EntryModel;
