import { Router } from "express";
import { attendace, getSingleUser } from "../Controller/attendanceController.js";

const router = Router()


router.route('/attendace').get(attendace)
router.route('/single-user').get(getSingleUser  )


export default router;