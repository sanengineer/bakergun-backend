const express = require("express");
const router = express.Router();

router.use("/api/v1/players", require("./players")); // endpoint untuk assets images di players page
router.use("/api/v1/gameboard", require("./gameboard")); // endpoint untuk assets images yang ada di gamepage
router.use("/api/v1/images", require("./images"));

module.exports = router;
