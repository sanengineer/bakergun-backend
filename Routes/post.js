const express = require("express");
const router = express.Router();
const post = require("../Models/post-model");
const middleWare = require("../Helpers/middlewares");

// All Posts
router.get("/", async (req, res) => {
  await post
    .getPosts()
    .then((posts) => res.json(posts))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

// All Post By Id
router.get("/:id", middleWare.mustBeInteger, async (req, res) => {
  const id = req.params.id;

  await post
    .getPost(id)
    .then((post) => res.json(post))
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({ message: err.message });
      } else {
        res.status(500).json({ message: err.message });
      }
    });
});

// Insert A New Post
router.post("/", middleWare.checkFieldPost, async (req, res) => {
  await post
    .insertPost(req.body)
    .then((post) =>
      res.status(201).json({
        message: `Database #${post.id} has been created`,
        gender: post,
      })
    )
    .catch((err) =>
      res.status(500).json({
        message: err.message,
      })
    );
});

// Update A Post
router.put(
  "/:id",
  middleWare.mustBeInteger,
  middleWare.checkFieldPost,
  async (req, res) => {
    const id = req.params.id;

    await post
      .updatePost(id, req.body)
      .then((post) =>
        res.json({
          message: `Database #${id} has been update`,
          gender: post,
        })
      )
      .catch((err) => {
        if (err.status) {
          res.status(err.status).json({
            message: err.message,
          });
        }
      });
  }
);

// Delete A Post
router.delete("/:id", middleWare.mustBeInteger, async (req, res) => {
  const id = req.params.id;

  await post
    .deletePost(id)
    .then((post) =>
      res.json({
        message: `Database #${id} has been deleted`,
      })
    )
    .catch((err) => {
      if (err.status) {
        res.status(err.status).json({
          message: err.message,
        });
      }
      res.status(500).json({ message: err.message });
    });
});

module.exports = router;
