const express = require('express');
const router = express.Router();
const commentController = require("../controllers/comment.js")

router.get("/comment", commentController.index)

router.post("/", commentController.create);
router.get("/comment/new", commentController.new)
router.get("/:id", commentController.show)
// router.put("/:id", commentController.update)

module.exports = router