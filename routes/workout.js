const express = require('express');
const router = express.Router();

router.get("/", (req, res)=>{
    res.send("this is where you find your workout")
})
module.exports = router