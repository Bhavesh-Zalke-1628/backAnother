import mongoose, { Schema, model } from 'mongoose'

const attendacneSchema = new Schema({
    student_id : {
        type: String
    },
    present: {
        type: Boolean,
    },
    absent: {
        type: Boolean,
    }
}, { timestamps: true })

const Attendace = model("Attendace", attendacneSchema)
export default Attendace;

