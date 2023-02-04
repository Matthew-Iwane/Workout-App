const express = require('express');
const {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout

} = require('../controllers/workoutController')

const router = express.Router();

// GET all workouts
router.get('/', getWorkouts);

// GET single workout
router.get('/:id', getSingleWorkout);

// POST new workout
router.post('/', createWorkout);

// DELETE a workout
router.delete('/:id', deleteWorkout);

// UPDATE a workout
router.patch('/:id', updateWorkout);

module.exports = router;