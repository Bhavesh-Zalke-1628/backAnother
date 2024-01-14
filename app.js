import express from 'express'
import { config } from 'dotenv';
import cors from 'cors'
config();
const app = express();

import adminRoute from './Router/adminRoute.js'
import studentRoute from './Router/studentRoute.js'
import morgan from 'morgan';
app.use(cors())
// Parse the json data 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

// user route
// http://localhost/4000/auth/login
app.use('/auth', adminRoute)


// Student Route

// http://localhost/4000/student/......
app.use('/student', studentRoute)



// not found the any app
// app.get('/', (req, res) => {
//     res.status(404).json({
//         sucess: false,
//         msg: "pag"
//     })
// })



export default app;