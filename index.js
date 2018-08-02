const express = require("express")
const app = express()
const hbs = require("hbs")
const bodyParser = require("body-parser")
const parser = app.use(bodyParser.urlencoded({ extended: true }))
app.set("view engine", "hbs")
app.set('views', __dirname + '/views')
app.use(express.static("public"))

// .use.require routes here
// app.use(require("./routes/index.js"))
app.use(require('./routes/application.js'))
app.use(require('./routes/comment.js'))
app.use(require('./routes/user.js'))
app.use(require('./routes/workout.js'))

app.listen(4000, () => console.log("running on port 4000!!!"))