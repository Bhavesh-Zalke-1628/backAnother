import { Router } from 'express'
import { register ,login,logout} from '../Controller/adminController.js'
import upload from '../MiddleWare/multerMiddleWare.js';
const router = Router();


router.route('/register').post(upload.single('profile'),register)
router.route('/login').post(login)
router.route('/logout').get(logout)


export default router;
// /auth/register