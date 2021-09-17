import * as mongoose from 'mongoose';


export const wordSchema=new mongoose.Schema({
  word:String,
  pic_gif:String
})