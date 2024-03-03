import Apperror from "../MiddleWare/Apperror.js"
import Attendace from "../Model/AttendanceModel.js"
import Student from './../Model/studentModel.js'
const presetnAttendace = async (req, res, next) => {
    let { present, absent } = req.body
    const { id } = req.params
    console.log(id)
    present = true
    absent = false
    const data = await Attendace.create({
        student_id: id,
        present: present,
        absent: absent
    })

    try {
        res.status(200).json({
            success: true,
            msg: "Student Present",
            data
        })
    } catch (error) {
        return next(new Apperror(error, 400))
    }
}


const absentAttendace = async (req, res, next) => {
    let { present, absent } = req.body
    const { id } = req.params
    console.log(id)

    absent = true
    present = false

    const data = await Attendace.create({
        student_id: id,
        present: present,
        absent: absent
    })

    try {
        res.status(200).json({
            success: true,
            msg: "Student Absent",
            data
        })
    } catch (error) {
        return next(new Apperror(error, 400))
    }

}


const getStudentAttandacne = async (req, res, next) => {
    try {
        const data = await Attendace.find({})
        res.status(200).json({
            success: true,
            data,
        })
    } catch (error) {
        return next(
            new Apperror(
                error, 400
            )
        )
    }
}
export {
    presetnAttendace,
    absentAttendace,
    getStudentAttandacne
}