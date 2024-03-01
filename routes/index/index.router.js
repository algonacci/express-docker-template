const express = require("express");
const router = express.Router();
const compression = require("compression")

//Middleware
const cache = require('../../config/cache')
const limit = require("./../../config/rateLimiter")

//Controller
const index = require("./index.controller");

//Routes
router.route("/").get(limit(10) ,index.helloIndex); //Set limiter 10 request/minutes
router.route("/").post(index.helloPost);
router.route("/test").get(compression(), cache('1 minutes'),index.getData); //Set compression and cache

module.exports = router;
