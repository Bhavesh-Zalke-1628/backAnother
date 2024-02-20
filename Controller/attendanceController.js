import Apperror from "../MiddleWare/Apperror.js"
import Attendace from "../Model/AttendanceModel.js"
import Student from './../Model/studentModel.js'
const attendace = async (req, res, next) => {
    try {
        const response = await Student.find({})
        console.log('response >', response)
        const student = await Attendace.create({
            studentData: response
        })
        res.status(200).json({
            success: true,
            msg: "Student Data",
            student
        })
    } catch (error) {
        return next(new Apperror(error, 400))
    }
}

const getSingleUser = async (req, res, next) => {
        try {

    } catch (error) {

    }
}

export {
    attendace,
    getSingleUser
}