import { Router } from 'express'
import { register, login, logout, profile } from '../Controller/adminController.js'
import upload from '../MiddleWare/multerMiddleWare.js';
import isLoggredIN from '../MiddleWare/isLoogedIn.js';
const router = Router();

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').post(logout)
router.route('/profile').post(profile)

export default router;
// /auth/register