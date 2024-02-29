import Apperror from "../MiddleWare/Apperror.js"
import Attendace from "../Model/AttendanceModel.js"
import Student from './../Model/studentModel.js'
const attendace = async (req, res, next) => {
    const { data } = req.body
    try {
        res.status(200).json({
            success: true,
            msg: "Student Data",
            student: data
        })
    } catch (error) {
        return next(new Apperror(error, 400))
    }
}

export {
    attendace
}