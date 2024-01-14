// import the packages
import { Router } from 'express'
const router = Router()

// import the files
import { createStudent,getStudent } from '../Controller/studentController.js'


router.route('/create-student').post(createStudent)
router.route('/getstudent/:id').get(getStudent)


export default router;