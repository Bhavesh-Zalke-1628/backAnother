import mongoose, { Schema, model } from "mongoose";


const marksModel = new Schema({
    name: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student"
    }
})

const marks = model("Marks", marksModel)
export default marks;