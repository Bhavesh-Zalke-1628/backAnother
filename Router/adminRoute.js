import { Router } from 'express'
import { register, login, logout, profile } from '../Controller/adminController.js'
import upload from '../MiddleWare/multerMiddleWare.js';
import isLoggredIN from '../MiddleWare/isLoogedIn.js';
const router = Router();


router.route('/register').post(upload.single('profile'), register)
router.route('/login').post(login)
router.route('/logout').get(logout)
router.route('/getProfile').get(isLoggredIN, profile)

export default router;
// /auth/register