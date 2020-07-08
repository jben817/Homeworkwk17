const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

  dayCreated: {
    type: Date,
    default: Date.now

  },
  exercise: [{
    type: {
      type: String,
      trim: true, //removes whitespace before and after
      required: "Exercise type is Required"},

    name: {
        type: String,
        trim: true, //removes whitespace before and after
        required: "Exercise name is Required"},

    distance: {
          type: Number,
          trim: true} ,

    duration: {
            type: Number,
            trim: true},

    reps: {
            type: Number,
            trim: true},

    sets: {
            type: Number,
            trim: true},

    weight: {
            type: Number,
            trim: true}
  }]

});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;


