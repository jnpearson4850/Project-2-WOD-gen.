const { Workout, Comment } = require("../models/Workout");
const User = require("../models/User");

module.exports = {
    index: (req, res) => {
        Comment.find({})
        .populate("author")
        .then(comment => {
            res.render("comment/", { comment })
        })
    },show: (req, res) => {
        Comment.find({})
        .populate("author")
        .then(comment => {
            res.render("comment/new", { comment })
          })
          .then(user => {
              res.render("user.show", { user })
          })
      },
      new: (req, res) => {
        Comment.find({})
        .populate("author")
        .then(comment => {
            res.render("comment/new", { comment })
      })
    },
    create: (req,res) => {
        Comment.find({})
        .populate("author")
        .then(comment => {
            res.render("comment/new"), { comment }
        })
    },update: (req, res) => {
        Comment.find({})
        .populate("author")
        .then(comment => {
            res.render("comment/update", { comment })
    })
}
}
      