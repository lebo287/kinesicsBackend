import * as mongoose from 'mongoose';


export const RequestedSchema = new mongoose.Schema({
    userID: Number,
    word: String,
    gif:String,
    approved: Boolean,
})
