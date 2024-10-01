const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')
const route = require('./routes/userRoute.js')
const app = express()



dotenv.config()
const PORT = 5000
const MONGOURL = process.env.MONGO_URL

mongoose
    .connect(MONGOURL)
    .then(() => {
        console.log("Database Connected Successfully")
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`)
        })
    })
    .catch((err) => console.log(err))

app.use("/api/user", route)