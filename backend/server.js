require('dotenv').config();

const express = require('express');
const workouts = require('./routes/workouts');
const mongoose = require('mongoose');


// express app
const app = express();

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/workouts' , workouts); // when a user goes to /api/workouts then we run 'workouts'

// connect to database
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for requests, once we are connecting to the database
        app.listen(process.env.PORT, () => {
            console.log(`\n ***** SUCCESSFULLY CONNECTED TO DATABASE *****\n`);
        })
    })
    .catch((error) => {
        console.log(error);
    })  