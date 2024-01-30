import express from 'express'
import { config } from 'dotenv';
import cors from 'cors'
import morgan from 'morgan';
config();
const app = express();

// import the files  
import adminRoute from './Router/adminRoutes.js'
import studentRoute from './Router/studentRoutes.js'
import cookieParser from 'cookie-parser'


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

// Admin Routes 
app.use('/api/admin', adminRoute)

// Student Routes
app.use('/api/admin', studentRoute)

export default app;
