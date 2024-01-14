import jwt from 'jsonwebtoken'
const isLoggredIN = async function (req, res, next) {
    const { token } = await req.cookies;
    if (!token) {
        res.send("unAuthenticate ,Please Log in")
    }
    const userDetails = await jwt.verify(token, process.env.SECRET)

    req.admin = userDetails;
    next();
}

export default isLoggredIN;