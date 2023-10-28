require('dotenv').config()
const express = require('express')

const workoutRoutes = require('./routes/workout')
const { default: mongoose } = require('mongoose')

// Express app
const app = express()

// middleware
app.use(express.json())
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

//route
app.use('/api/workouts',workoutRoutes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
         // Listen for requests
        app.listen(process.env.PORT, ()=>{
            console.log('Connected to DB \nListening on 4000!!')
        })
    })
    .catch((error) => console.log(error))




process.env
