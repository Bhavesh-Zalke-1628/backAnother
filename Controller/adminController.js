import Apperror from "../MiddleWare/Apperror.js"
import Admin from "../Model/adminModel.js";
const cookieOpations = {
    httpOnly: true,
    secure: false
}
const register = async (req, res, next) => {
    const { fullname, email, password } = req.body;
    if (!fullname || !email || !password) {
        return next(new Apperror("All required", 400))
    }

    const adminExist = await Admin.findOne({ email })
    if (adminExist) {
        return next(new Apperror("Already register"))
    }

    const admin = await Admin.create({
        fullname,
        email,
        password
    })
    res.status(200).json({
        success: true,
        msg: "REgister successfully",
        admin
    })
}



export { register }