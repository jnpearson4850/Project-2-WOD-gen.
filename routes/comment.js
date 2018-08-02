const express = require('express');
const router = express.Router();
const commentController = require("../controllers/comment.js")

router.get("/comment", commentController.index)

router.post("/", commentController.create);
router.get("/comment/new", commentController.new)
router.get("/comment/:id", commentController.show)
router.put("/comment/:id", commentController.update)

module.exports = router