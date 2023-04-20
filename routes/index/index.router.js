const express = require("express");
const router = express.Router();

const { helloIndex } = require("./index.controller");

router.route("/").get(helloIndex);

module.exports = router;
