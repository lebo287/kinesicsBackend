import * as mongoose from 'mongoose';


export const RequestedSchema = new mongoose.Schema({
    word: String,
    gif:String,

})
