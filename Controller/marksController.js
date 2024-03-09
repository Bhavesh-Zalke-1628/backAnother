import asyncHandler from 'express-async-handler'
import Apperror from '../MiddleWare/Apperror.js'
const getMarks = asyncHandler(async (req, res) => {
    try {
        res.status(200).json({
            message: "Marks "
        })
    } catch (error) {
        next(
            new Apperror(
                error, 400
            )
        )
    }
})

const addMarks = asyncHandler(async (req, res, next) => {
    const { asp, st, mmt, cst, adbms } = req.body
    try {
        console.log(asp, st, mmt, cst, adbms)
        const x = asp + st + mmt + cst + adbms
        let y
        if (x > 15) {
            y = "pass"
        } else {
            y = 'fail'
        }
        res.status(200).json({
            success: true,
            msg: "total",
            total : x,
            result : y
        })
    } catch (error) {
        next(
            new Apperror(error, 400)
        )
    }
})
export {
    getMarks,
    addMarks
}