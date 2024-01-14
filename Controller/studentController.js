import Student from "../Model/studnetModel.js"
const createStudent = async (req, res, next) => {
    try {
        const { name, email, phone } = req.body
        if (!name || !email || !phone) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields"
            })
        }

        const studentExist = await Student.findOne({ email })
        if (studentExist) {
            res.status(400).json({
                success: false,
                msg: "Student Already Registered"
            })
        }
        const student = await Student.create({
            name,
            email,
            phone,
        })
        await student.save()
        res.status(201).json({
            success: true,
            msg: "Student Created Successfully",
            student
        })
    } catch (error) {
        console.log(error)
    }
}


const getStudent = async (req, res, next) => {
    const { id } = req.params
    const student = await Student.findById(id)
    if (!student) {
        res.status(400).json({
            success: false,
            msg: "Student Not Found"
        })
    }
    res.status(200).json({
        success: true,
        msg: "Student Found",
        student
    })
}



// export default 
export {
    createStudent,
    getStudent
}
