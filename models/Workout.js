//these are my two Non-user models. Workout and comment section. 

const mongoose = require("../db/connection")
const Schema = mongoose.Schema


const Comment = new Schema ({
    content: String,
    createdAt: {
        type: Date, 
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId, 
        ref: "User"
    }
})

const Workout = new Schema({
    content: String, 
    rounds: String,
    movement1: String,
    movement2: String, 
    movement3: String,
    movement4: String, 
    movement5: String,
    movement6: String,
    movement7: String,
    comments: [Comment]
})



module.exports = {
    Comment: mongoose.model("Comment", Comment),
    Workout: mongoose.model("Workout", Workout)
}