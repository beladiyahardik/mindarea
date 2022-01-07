const connection = require('./config/connection');
const express = require('express');
const userRoute = require('./routes/userRoute')
const postRoute = require('./routes/postRoute')

const app = express()
app.use(express.json())
app.use('/', userRoute)
app.use('/', postRoute)

app.listen(3000);