const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

// create a new workout
const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body;

    // adding document to db
    try {
        const workout = await Workout.create({title, load, reps});
        res.status(200).json(workout);
    } catch(err) {
        res.status(400).json({error: err.message});
    }
}

// get all workouts
const getWorkouts = async (req, res) => {
    const workouts = await Workout.find({}).sort({createdAt: -1});
    res.status(200).json(workouts);
}

// get a singular workout
const getSingleWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Workout not found!"});
    }

    const workout = await Workout.findById(id);

    if (!workout) {
        return res.status(400).json({error: "Workout not found!"});
    }

    res.status(200).json(workout);
}

// deleting a workout
const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Workout not found!"});
    }

    const workout = await Workout.findOneAndDelete({ _id: id })
    if (!workout) {
        return res.status(400).json({error: "Workout not found!"});
    } 

    res.status(200).json(workout);
}

// updating a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "Workout not found!"});
    }

    const workout = await Workout.findOneAndUpdate({_id: id}, {
        req.body
    })
}

module.exports = {
    createWorkout,
    getWorkouts,
    getSingleWorkout,
    deleteWorkout,
    updateWorkout
}