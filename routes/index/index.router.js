const express = require("express");
const router = express.Router();

const index = require("./index.controller");

router.route("/").get(index.helloIndex);
router.route("/").post(index.helloPost);

module.exports = router;
