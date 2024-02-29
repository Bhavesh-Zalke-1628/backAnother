import mongoose, { Schema, model } from "mongoose";

const studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
    },
    phone: {
        type: Number
    }

})
const Student = model('Students', studentSchema)

export default Student