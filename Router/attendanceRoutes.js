import { Router } from "express";
import { absentAttendace, getStudentAttandacne, presetnAttendace } from "../Controller/attendanceController.js";

const router = Router()

router.route('/attendace/present/:id').post(presetnAttendace)
router.route('/attendace/absent/:id').post(absentAttendace)
router.route('/attendace/get').get(getStudentAttandacne)
export default router;         
