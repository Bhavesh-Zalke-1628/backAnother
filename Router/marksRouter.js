import { Router } from 'express'
import { addMarks, getMarks } from '../Controller/marksController.js'

const router = Router()


router.route('/getmarks').get(getMarks)
router.route('/mark/addmarks').post(addMarks)

export default router   