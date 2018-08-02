const User = require('../models/User')
const { Comment } = require("../models/Workout")
const { Wods } = require("../models/Workout")

User.find({}).remove(() => {
    Comment.find({}).remove(() => {
      let admin = User.create({
        content: String, 
        rounds: String,
        movement1: String,
        movement2: String, 
        movement3: String,
        movement4: String, 
        movement5: String,
        movement6: String,
        movement7: String,
        comments: [String]
          
 } } })))