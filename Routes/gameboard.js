const express = require("express");
const router = express.Router();
const post = require("../Models/gameboard-model");
const mw = require("../Helpers/middlewares");

// All Posts Gameboard
router.get("/", async (req, res) => {
  await post
    .getPostsGameboard()
    .then((posts) => res.json(posts))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

// All Posts Gameboard By Name
router.get("/:id", mw.mustBeInteger, async (req, res) => {
  const id = req.params.id;

  await post
    .getPostGameboard(id)
    .then((post) => res.json(post))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

module.exports = router;
