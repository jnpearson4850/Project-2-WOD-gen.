const User = require('../models/User')
const { Comment } = require("../models/Workout")
const { Wods } = require("../models/Workout")

User.find({}).remove(() => {
    Comment.find({}).remove(() => {
      let admin = User.create({
        content: "for time", 
        rounds: "5 rouds",
        movement1: "1 a",
        movement2: "1 b", 
        movement3: "1 nd",
        movement4: "1 nd", 
        movement5: "1 nd",
        movement6: "1 nd",
        movement7: "1 nd",
        comments: ["1 nd"]
          
 } } })))