const express = require("express")
const app = express()
const hbs = require("hbs")
app.set("view engine", "hbs")
const bodyParser = require("body-parser")
const parser = app.use(bodyParser.urlencoded({ extended: true }))


//routes below here
app.use(require('./routes/login.js'))
app.use(require('./routes/signup.js'))
app.use(require('./routes/workout.js'))

app.get("/:name", (req,res) => {
    res.render(`hello + ${req.params.name}`)
})

app.get("/:id", (req, res) => {

})
  
app.post('/', (req, res) => {
    Workout.create(req.body)
      .then(myNewItem => {
        res.redirect('/')
      })
  })


app.listen(4000, () => console.log("running on port 4000!!!"))