const express = require('express')
const Workout = require('../models/workoutModel')

const router =express.Router()

// GET all workouts
router.get('/', (req, res)=>{
    res.json({mssg:'get all workouts '})
})

// GET single workout
router.get('/:id', (req, res)=>{
    res.json({mssg:'get single workouts '})
})

// POST a new workout
router.post('/', async (req, res)=>  {
    const{title, load, reps} = req.body

    try {
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

// DELETE a new workout
router.delete('/:id', (req, res)=>{
    res.json({mssg:'Delete a workout'})
})

// Update a new workout
router.patch('/:id', (req, res)=>{
    res.json({mssg:'Update a workout'})
})

module.exports = router