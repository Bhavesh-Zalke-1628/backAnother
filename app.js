import express from 'express'
import { config } from 'dotenv';
config();
import cors from 'cors'
import morgan from 'morgan';
const app = express();

// import the files  
import adminRoute from './Router/adminRoutes.js'
import studentRoute from './Router/studentRoutes.js'
import attendaceRoute from './Router/attendanceRoutes.js';
import marksRoute from './Router/marksRouter.js';

import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser';


app.use(cors({
    origin: process.env.FRONTEND_URI,
    methods: 'GET,POST,DELETE,PUT',
    credentials: true
}))
// Parse the json data 
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cookieParser())
app.use(bodyParser.json())
// Admin Routes 
app.use('/api/admin', adminRoute)

// Student Routes
app.use('/api/admin', studentRoute)

// Attendace Route
app.use('/api/admin', attendaceRoute)

// Marks Route 
app.use('/api/admin', marksRoute)

export default app;
