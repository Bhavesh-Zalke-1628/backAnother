import jwt from 'jsonwebtoken'

const isLoggedIn = async (req, res, next) => {
    const token = req.cookie;
    if (!token) {
        res.status(401).json({
            success: false,
            msg: "UnAuthenticcate , plese log in"
        })
    }

    const userDetails = await jwt.verify(token, process.env.SECRET)
    req.user = userDetails
    next()
}
export default isLoggedIn; 