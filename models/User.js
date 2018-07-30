//UNSUre if set up was done correctly


const mongoose = require("../db/connection")
const myModel = mongoose.model("modelName", mySchema)

const User = new mongoose.Schema ({
    email: "string",
    password: "string"
})


module.exports = myModel