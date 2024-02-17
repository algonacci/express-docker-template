const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

app = express();

const indexRouter = require("./routes/index/index.router");

const { isAuthenticated } = require("./middleware/isAuthenticated");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/", isAuthenticated, indexRouter);

module.exports = app;
