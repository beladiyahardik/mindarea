const connection = require('./config/connection');
const express = require('express');
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())
app.use('/user', userRoute)
app.use('/post', postRoute)

app.listen(5000);