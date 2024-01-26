// import the packages
import { Router } from "express";
const router = Router();

// import the  files
import { register } from "../Controller/adminController.js";


router.route('/register').post(register)


export default router;