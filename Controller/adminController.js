import Admin from '../Model/adminModels.js'
import cloudnary from 'cloudinary'
import fs from 'fs/promises'
const cookieOption = {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 100, //for the 7 days login token
    secure: true
}
const register = async (req, res, next) => {
    const { name, email, password } = req.body
    if (!name || !email || !password) {
        res.status(400).json({
            succes: false,
            msg: "All field are required"
        })
    }

    const adminExist = await Admin.findOne({ email })
    if (adminExist) {
        res.status(400).json({
            succes: false,
            msg: "Already Register Email"
        })
    }

    const admin = await Admin.create({
        name,
        email,
        password,
        profile: {
            publicId: "demo",
            secureUrl: "demo"
        }
    })
    const token = await admin.generateToken();
    res.cookie("token", token, cookieOption)
    await admin.save();

    if (req.file) {
        console.log(req.file)
        const result = await cloudnary.v2.uploader.upload(req.file.path, {
            folder: "AdminProfile",
            crop: "scale",
            gravity: "face",
            width: 250,
            height: 250
        });
        if (result) {
            admin.profile.publicId = result.public_id;
            admin.profile.secureUrl = result.secure_url;
        }

        //remvove the file from local server
        fs.rm(`upload/${req.file.filename}`)
    }
    res.status(201).json({
        succes: true,
        msg: "Admin Register Successfully",
        hi: admin.id,
    })
}

const login = async (req, res, next) => {
    try {
        const { email, password } = req.body
        if (!email || !password) {
            res.status(400).json({
                succes: false,
                msg: "all require"
            })
        }
        const admin = await Admin.findOne({ email })
        if (!admin) {
            res.status(400).json({
                succes: false,
                msg: "Invalid Email"
            })
        }

        const isMatch = await admin.comparePassword(password)
        if (!isMatch) {
            res.status(400).json({
                succes: false,
                msg: "Invalid Password"
            })
        }
        const token = await admin.generateToken();
        res.cookie("token", token, cookieOption)
        await admin.save();
        res.status(201).json({
            succes: true,
            msg: "Admin Login Successfully",
        })
    } catch (error) {
        res.status(400).json({
            succes: false,
            error
        })
    }
}

const logout = async (req, res, next) => {
    try {
        res.clearCookie('token')
        res.status(200).json({
            success: true,
            msg: "User logged out successfully"
        })

    } catch (error) {
        res.status(400).json({
            succes: false,
            error
        })
    }
}
const profile = async (req, res, next) => {
    const id = req.admin.id
    console.log(id)
    try {
        const admin = await Admin.findOne(id)
        if (!admin) {
            res.status(401).json({
                sucess: false,
                msg: "Admin "
            })
        }
        if (admin) {
            res.status(200).json({
                sucess: true,
                msg: "Admin Data",
                admin
            })
        }
    } catch (error) {
        res.status(401).json({
            sucess: false,
            msg: error
        })
    }
}

export {
    register,
    login,
    logout,
    profile
}