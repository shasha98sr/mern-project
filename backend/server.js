require('dotenv').config()
const express = require('express')

// Express app
const app = express()
const workoutRoutes = require('./routes/workouts.js')
const { default: mongoose } = require('mongoose')

// middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//route
app.use('/api/workouts',workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_UI)
.then(()=>{

})
.catch((error) => console.log(error))


// Listen for requests
app.listen(process.env.PORT, ()=>{
    console.log('listening on 4000!!')
})

process.env
