const express = require('express')
const router = express.Router()

//routes below here
app.use(require('./routes/comment.js'))
app.use(require('./routes/user.js'))
app.use(require('./routes/workout.js'))

router.all('*', (req, res) => {
    res.status(400).send();
  });

  module.exports = router;
