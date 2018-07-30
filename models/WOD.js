//UNSUre if set up was done correctly


const mongoose = require("../db/connection")
const myModel = mongoose.model("modelName", mySchema)

const Workout = new mongoose.Schema({
    movement1: "string",
    movement2: "string", 
    movement3: "string",
    movement4: "string", 
    movement5: "string",
    movement6: "string",
    movement7: "string"

})



module.exports = myModel