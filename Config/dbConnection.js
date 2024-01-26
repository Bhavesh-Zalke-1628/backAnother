import mongoose, { connect } from "mongoose"

const connectedToDb = async function () {
    const  connection  = mongoose.connect(process.env.MONGO_URI)
    if (connection) {
        console.log(`The database is connect `)
    }
}

export default connectedToDb;