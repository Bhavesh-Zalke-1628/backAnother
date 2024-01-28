import { Router } from "express";
import { createStudent, getStudent } from "../Controller/studentcontrller.js";
import { isLoggedIn } from "../MiddleWare/authMiddleWare.js";

const router = Router()

router.route('/student-info')
.get(getStudent)    
.post(
        isLoggedIn,
        createStudent)


export default router;