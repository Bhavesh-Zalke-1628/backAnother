// import the packages
import { Router } from "express";
const router = Router();

// import the  files
import { adminDetails, login, logout, profile, register } from "../Controller/adminController.js";
import upload from '../MiddleWare/multerMiddleware.js'
import { isLoggedIn } from "../MiddleWare/authMiddleWare.js";


router.route('/register').post(upload.single('profile'), register)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/me').get(isLoggedIn, profile)
router.route('/details').get(adminDetails)

export default router;