const User = require("../models/User")
const { Comment } = require("../models/Workout")
// const passport = require("passport")

module.exports = {
    index: (req, res) => {
        res.send('user/new')
    },
    show: (req, res) => {
      User.findOne({ _id: req.params.id })
        .populate({
            path: "comments"
        })
        .then(user => {
            res.render("user.show", { user })
        })
    },
    new: (req, res) => {
        res.render("user/new")
    }, 
    create: (req, res) => {
        User.create ({
            local: {
                email: req.body.email, 
                password: req.body.password
            }
        }).then(user => {
            res.redirect(`/user/${user.id}`)
        })
    }
}