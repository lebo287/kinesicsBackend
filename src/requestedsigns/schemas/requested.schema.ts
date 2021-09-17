import * as mongoose from 'mongoose';


export const RequestedSchema = new mongoose.Schema({
    uuid: String,
    word: String,
    pic_gif:String,
    approved: Boolean,
})
