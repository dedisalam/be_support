import mongoose from 'mongoose';
import { Interface } from '@interfaces/admin/user';

const Schema: mongoose.Schema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Model = mongoose.model<Interface & mongoose.Document>('User', Schema);

export default Model;
