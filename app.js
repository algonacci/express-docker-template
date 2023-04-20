const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

app = express();

const indexRouter = require("./routes/index/index.router");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.use("/", indexRouter);

module.exports = app;
