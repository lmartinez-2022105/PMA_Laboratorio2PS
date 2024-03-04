import { Schema, model } from "mongoose";

const subjectSchema = Schema({
    name:{
        type: String,
        required: true,
        unique:true
    },
    description:{
        type: String,
        required: true,
    },
    professor:{
        type: Schema.ObjectId,
    }

})

export default model('subject', subjectSchema)
