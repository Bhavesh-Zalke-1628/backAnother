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
        console.log(error)
    }
}
const createStudent = async (req, res, next) => {

    const { name, email, phone } = req.body

    console.log(name, email, phone)
    try {
        if (!name || !email || !phone) {
            return next(new Apperror("All required", 400))
        }

        const studentExist = await Student.findOne({ email })
        if (studentExist) {
            return next(new Apperror("Already exist", 400))
        }


        const student = await Student.create({
            name,
            email,
            phone,
            
        })

        if (!student) {
            return next(new Apperror("Failed to create an student", 400));
        }

        res.status(200).json({
            success: true,
            msg: "Student create successfullly",
            student
        })
    } catch (error) {
        return next(new Apperror(error, 400))
    }
}



export {
    getStudent,
    createStudent
}