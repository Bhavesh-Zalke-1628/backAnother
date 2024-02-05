import { Router } from "express";
import { adminDetails } from "../Controller/adminDetailsController.js";
import { isLoggedIn } from "../MiddleWare/authMiddleWare.js";

const router = Router()


router.route('/admin-details').post(adminDetails)


export default router;