import { Schema, model } from "mongoose";

const adminDetailsSchema = new Schema({
    department: {
        type: String
    },
    clas: {
        type: String
    }
})


const AdminDetails = model("adminDetail", adminDetailsSchema);

export default AdminDetails;