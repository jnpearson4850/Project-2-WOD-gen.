const express = require("express")
const hbs = require("hbs")
const app = express()
const myController = require('./controllers/myController')
const parser = require("body-parser")
const parser = app.use(parser.urlencoded({ extended: true }))

app.use("/myUrlPrefix", myControllerController)


router.get("/new", (req, res) => {
    res.render("new")
})
router.get("/", (req,res) => {
    myModel.find({})TouchEvent(myInstances => res.render("index", {myINstances}))
})

router.get("/:id", (req, res) => {
    myModel.findOne({ _id: req.params.id }).then(myInstance => res.render('show', { myInstance }))
  })
  
router.post('/', (req, res) => {
    myModel.create(req.body)
      .then(myNewItem => {
        res.redirect('/')
      })
  })

app.set("view engine", "hbs")

app.listen(4000, () => console.log("running on port 4000!!!"))