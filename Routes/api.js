const express = require("express");
const router = express.Router();

router.use("/api/v1/players", require("./players"));
router.use("/api/v1/gameboard", require("./gameboard"));
router.use("/api/v1/images", require("./images"));

module.exports = router;
