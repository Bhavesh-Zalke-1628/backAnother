import { Router } from "express";
import { attendace } from "../Controller/attendanceController.js";

const router = Router()


router.route('/attendace/:id').post(attendace)


export default router;          