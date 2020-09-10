const express = require("express");
const router = express.Router();

router.use("/api/v1/players", require("./players"));
router.use("/api/v1/gameboard", require("./gameboard"));

module.exports = router;
