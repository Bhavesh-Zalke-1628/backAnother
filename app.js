import express from 'express'
import { config } from 'dotenv';
import cors from 'cors'
import morgan from 'morgan';
config();
const app = express();

// import the files  
import adminRoute from './Router/adminRoute.js'
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

// Admin routes 
app.use('/api/admin', adminRoute)

app.get('/', (req, res) => {
    res.send("hello")
})

export default app;