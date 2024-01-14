import { config } from "dotenv"
config();
import mongoose from "mongoose"
const URI = process.env.MONGO_URI

const connectedToDb = async () => {
    try {
        const res = mongoose.connect(URI)
        if (!res) {
            console.log("Failed to connect with the database")
        }
        console.log(`Connected to database`)
    } catch (error) {
        console.log("Failed to connect with the database")
    }
}

export default connectedToDb