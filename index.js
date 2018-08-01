const express = require("express")
const app = express()
const hbs = require("hbs")
app.set("view engine", "hbs")
const bodyParser = require("body-parser")
const parser = app.use(bodyParser.urlencoded({ extended: true }))

//render views on webpage

app.get("/", (req,res) => {
    res.render("index")
})
app.get('/profile/:id', (req, res) => {
    User.findOne({ _id: req.params.id})
    .then(user => {
        res.render('users/show', {user})
    })
})

//routes below here
app.use(require('./routes/login.js'))
app.use(require('./routes/signup.js'))
app.use(require('./routes/workout.js'))



app.get("/:id", (req, res) => {

})
  
// app.post('/', (req, res) => {
//     Workout.create(req.body)
//       .then(myNewItem => {
//         res.redirect('/')
//       })
//   })


app.listen(4000, () => console.log("running on port 4000!!!"))