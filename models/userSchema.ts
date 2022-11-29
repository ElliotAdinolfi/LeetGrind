import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    user: { type: String, unique: true, required: true },
  },
  { minimize: false }
);

// This or statement fixes mongoose error on NextJS->
//"Mongoose Cannot Overwrite Model Once Compiled Error"
module.exports = mongoose.models.users || mongoose.model('users', userSchema);
