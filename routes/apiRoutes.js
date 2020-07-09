const router = require("express").Router();
const Workout = require("../models/workout");

// create new workout- do I need to switch body to type or exercise and name?
app.post("/api/workouts", ({ body }, res) => {
    Workout.create(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });

//   update existing workout- findone and update? But was confused by it

app.post("/api/workouts", ({ body }, res) => {
    Workout.findOneAndUpdate(body)
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });



// need a route to view all stats
// need a route to delete workout




module.exports = router;
