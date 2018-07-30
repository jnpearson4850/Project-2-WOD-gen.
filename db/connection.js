const mongoose = require("mongoose") //required mongoose but this syntax may be wrong

mongoose.connect("mongoddb://localhost/db_name")

mongoose.Promise = Promise

module.exports = mongoose