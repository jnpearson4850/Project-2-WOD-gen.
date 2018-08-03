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
    })
  })})