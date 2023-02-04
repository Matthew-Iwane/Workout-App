const express = require('express');
const Workout = require('../models/workoutModel');
const {
    createWorkout,
    getWorkouts,
    getSingleWorkout,

} = require('../controllers/workoutController')

const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// GET single workout
router.get('/:id', getSingleWorkout);

// POST new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', (req, res) => {
    res.json({msg: 'DELETE a workout with specific ID'});
})

// UPDATE a workout
router.patch('/:id', (req, res) => {
    res.json({msg: 'UPDATE a workout with specific ID'});
})

module.exports = router;