//Working through seeding files.
const User = require('../models/User')
const { Comment } = require("../models/Workout")
const { Wods } = require("../models/Workout")
const bcrypt = require("bcrypt-nodejs")

const createPassword = password => 
    bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)

  User.find({}).remove(() => {
    Comment.find({}).remove(() => {
      let admin = User.create({
        local: {
          email: "jnpearson@gmail.com",
          password: createPassword("12345")
        }
    //   }).then((user) => {
    //     user.save(err => console.log(err));
    //   }).catch((err) => {
    //       console.log(err)
    //   }).then(user => {
    //       Promise.all([
    //           Workout.create({
    //               rounds: 20,
    //               movement1: "5 pullups",
    //               movement2: "10 pushups", 
    //               movement3: "15 Air Squats"
    //           }).then(Workout => {
    //               user.workouts.push(workouts)
    //           })
    //       ])
    //   }).then(user => {
    //     Promise.all([
    //         Workout.create({
    //             rounds: "21-15-9",
    //             movement1: "Thrusters-95lbs",
    //             movement2: "Pullups", 
    //         }).then(Workout => {
    //             user.workouts.push(workouts)
    //         })
    //     ])
    // })




    });
  });






