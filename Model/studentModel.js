import { Schema, model } from "mongoose";



const studentSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true 
    },
    phone: {
        type: String
    }

})
const Student = model('Students', studentSchema)

export default Student