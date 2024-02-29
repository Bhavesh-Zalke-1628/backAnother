import mongoose,{ Schema, model } from 'mongoose'

const attendacneSchema = new Schema({
    studentData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Students'
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

