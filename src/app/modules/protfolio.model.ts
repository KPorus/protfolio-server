import mongoose, { Schema, Document } from 'mongoose';
import { IProject } from './protfolio.interface';

const projectSchema: Schema = new Schema({
  title: {
    type: String,
    required: [true, "Title should not be empty!"]
  },
  details: {
    type: String,
    required: [true, "Details should not be empty!"]
  },
  img: {
    type: String,
    // required: [true, "Image URL should not be empty!"]
  },
  feature: {
    type: [String],
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  TECHNOLOGY: {
    type: [String],
    required: true
  },
  client: String,
  live: String,
  server: String
}, { timestamps: true });

export const Project = mongoose.model<IProject>('Project', projectSchema);