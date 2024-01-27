import Apperror from './Apperror.js';
import jwt from 'jsonwebtoken'
const isLoggedIn = async (req, res, next) => {
    const { token } = req.cookies;
    console.log(token)
    if (!token) {
        return next(new Apperror("unauthenticated ,Please log in again", 400))
    }

    // verify the back token with genereated token at the basis of the secret key
    const adminDetails = await jwt.verify(token, process.env.SECRET)

    // Put all the details in the req.admin
    req.admin = adminDetails
    next()
}


export default isLoggedIn