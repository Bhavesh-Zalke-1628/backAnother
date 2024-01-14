import { Schema, model } from 'mongoose'


const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: Number,
        required: true,
    }
})


const Student = model('Student', studentSchema)

export default Student;