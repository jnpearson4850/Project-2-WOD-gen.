//UNSUre if set up was done correctly

const mongoose = require("../db/connection")
const UserSignUp = mongoose.UserSignUp


const User = new Schema ({
    local: {
        email: "string",
        password: "string",
        default: Date.now()
    },
    post: [
        {
            type: Schema.Types.ObjectId,
            ref: "post"
        }
    ]
});


module.exports = mongoose.UserSignUp("User", User)