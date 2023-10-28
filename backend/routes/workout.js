const express = require('express')
const {createWorkout, getAllWorkouts, getWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutController')

const router =express.Router()

// GET all workouts
router.get('/', getAllWorkouts)

// GET single workout
router.get('/:id', getWorkout)

// POST a new workout
router.post('/', createWorkout)

// DELETE a new workout
router.delete('/:id', deleteWorkout)

// Update a new workout
router.patch('/:id', updateWorkout)

module.exports = router