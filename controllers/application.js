const { Workout } = require("../models/Workout");
const User = require("../models/User");

module.exports = {
    index: (req, res) => {
        res.render("app/index", {page: 'homepage'})
    }
    
}