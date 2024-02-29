import { Router } from "express";
import { absentAttendace, presetnAttendace } from "../Controller/attendanceController.js";

const router = Router()

router.route('/attendace/present/:id').post(presetnAttendace)
router.route('/attendace/absent/:id').post(absentAttendace)

export default router;          
