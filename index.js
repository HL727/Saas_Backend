const cookieParser = require('cookie-parser')
const express = require('express')
//require('dotenv').config()

const cors = require('cors');

const app = express()
//regular middleware
app.use(cors({
    origin: '*',
    methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH']

}));


app.use(express.json())
app.use(express.urlencoded({extended: true}))

//cookie middleware
app.use(cookieParser())

//user routes
const userRouter = require('./routes/userRoutes')

app.use('/api/v1', userRouter)

app.get('/', (req, res)=>{
    res.send("Hi from SaasDemo Backend Server")
})

app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})

