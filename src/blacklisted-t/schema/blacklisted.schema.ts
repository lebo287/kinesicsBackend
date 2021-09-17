import * as mongoose from 'mongoose';


export const BlacklistedSchema = new mongoose.Schema({
    username: String,
    email:String,

})
