const express=require('express');
const cors=require('cors');
const dotenv=require('dotenv');
const userRoute=require('./route/user.route')
const captainRoute=require('./route/captain.route')
const connectDB=require('./db/db');
const cookieParser = require('cookie-parser');

dotenv.config();
const app=express();
app.use(cors())
connectDB()
app.use(express.urlencoded({extended:true}))

app.use(cookieParser())

app.use(express.json())
app.use('/api/user',userRoute)
app.use('/api/captain',captainRoute)


module.exports=app