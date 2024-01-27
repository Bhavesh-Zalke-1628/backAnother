
import cloudinary from 'cloudinary'
import fs from 'fs/promises'

import Apperror from "../MiddleWare/Apperror.js"
import Admin from "../Model/adminModel.js";
import { json } from 'express';

const cookieOption = {
    httpOnly: true,
    maxAge: 7 * 24 * 60 * 1000, //for the 7 days login token
    secure: true
}
const register = async (req, res, next) => {
    try {
        const { fullname, email, password } = req.body;
        if (!fullname || !email || !password) {
            return next(new Apperror("All fields are required", 400))
        }

        const adminExist = await Admin.findOne({ email })
        if (adminExist) {
            return next(new Apperror("Already register"))
        }

        const admin = await Admin.create({
            fullname,
            email,
            password,
            profile: {
                public_id: '',
                secure_url: ''
            }
        })


        // upload the profile picture of the admin
        // if (req.file) {
        //     console.log(req.file)
        //     try {
        //         const result = await cloudinary.v2.uploader.upload(req.file.path, {
        //             folder: "avatars",
        //             width: 150,
        //             height: 150,
        //             crop: "fill",
        //             gravity: "faces",
        //         })
        //         if (result) {
        //             admin.profile.public_id = result.public_id;
        //             admin.profile.secure_url = result.secure_url;

        //             // remove the file from the local server 
        //             fs.rm(`uploads/${req.file.filename}`)
        //         }
        //     } catch (error) {
        //         return next(new Apperror("Image upload failed" || error, 500))
        //     }
        // }

        // generate the jwt token
        const token = await admin.generateJwtToken();
        // send the token in the cookies
        res.cookie('token', token, cookieOption)
        // another save next time save the user 
        await admin.save();

        // send the response to client
        res.status(200).json({
            success: true,
            msg: "Admin register successfully",
            admin,
            token
        })
    } catch (error) {
        return next(new Apperror(error, 400))
    }
}

const login = async (req, res, next) => {
    const { email, password } = req.body
    try {
        if (!email || !password) {
            return next(new Apperror("All requried", 400))
        }

        const adminExist = await Admin.findOne({ email })

        if (!adminExist) {
            return next(new Apperror("Invalid Email", 400))
        }

        if (!adminExist || !adminExist.comparedPassword(password)) {
            return next(new Apperror("Invalid Email Or Password", 400))
        }

        const token = await adminExist.generateJwtToken()
        res.cookie('token', token, cookieOption)

        res.status(200).json({
            success: true,
            msg: "Admin Looged in Successfully",
            adminExist,
            token
        })
    } catch (error) {
        return next(new Apperror(error, 400))
    }
}


const logout = async (req, res, next) => {
    try {
        res.clearCookie('token', null, {
            httpOnly: true,
            maxAge: 0,
            secure: true
        })

        res.status(200).json({
            success: true,
            msg: "Admin Logged out Successfully",

        })
    } catch (error) {
        return next(new Apperror(error, 400))
    }
}

const profile = async (req, res, next) => {
    const { id } = req.admin
    try {
        console.log(id)
        const admin = await Admin.findById(id)
        if (!admin) {
            return next(new Apperror("Admin not found", 400))
        }

        console.log(admin)
        res.status(200).json({
            success: true,
            msg: "user Profle",
            admin
        })

    } catch (error) {
        return next(new Apperror(error))
    }
}

export { register, login, logout, profile }