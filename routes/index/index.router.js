const express = require("express");
const router = express.Router();
const compression = require("compression");

//Middleware
const { isAuthenticated } = require("./../../middleware/isAuthenticated");
const cache = require('../../middleware/cache');
const limit = require("./../../middleware/rateLimiter");

//Controller
const index = require("./index.controller");

//Routes
router.route("/").get(isAuthenticated, limit(10) ,index.helloIndex); //Set limiter 10 request/minutes
router.route("/").post(isAuthenticated, index.helloPost);
router.route("/test").get(isAuthenticated, compression(), cache('1 minutes'),index.getData); //Set compression and cache

module.exports = router;
