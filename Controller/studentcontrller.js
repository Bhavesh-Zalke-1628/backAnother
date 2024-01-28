import Apperror from "../MiddleWare/Apperror.js"
import Student from "../Model/studentModel.js"

const getStudent = async (req, res, next) => {
    const studentData = await Student.find({})
    try {
        res.status(200).json({
            success: true,
            msg: "Student data",
            studentData
        })
    } catch (error) {

    }
}
const createStudent = async (req, res, next) => {
    const { name, email, phone } = req.body
    try {
        if (!name || !email || !phone) {
            return next(new Apperror("all required", 400))
        }
        const studentExist = await Student.findOne({ email })
        if (studentExist) {
            return next(new Apperror("Already register", 400))
        }
        const student = await Student.create({
            name,
            email,
            phone
        })

        res.status(200).json({
            success: true,
            msg: "Student Created",
            student
        })
    } catch (error) {
        console.log(error)
    }
}



export {
    getStudent,
    createStudent
}