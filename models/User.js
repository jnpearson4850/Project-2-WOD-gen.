const mongoose = require("../db/connection")
const Schema = mongoose.Schema

const User = new Schema ({
    local: {
        email: "string",
        password: "string",
        // default: Date.now()
    }
    // comment: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "comment"
    //     }
    // ]
});


module.exports = mongoose.model("User", User)