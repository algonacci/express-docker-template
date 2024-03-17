const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')
const apiDocs = YAML.load('./api-docs.yaml')

//Middleware
const notFoundHandler = require("./middleware/errors");

//Router
const indexRouter = require("./routes/index/index.router");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

//API DOCS with Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(apiDocs))

//Routes
app.use("/", indexRouter);

// Routes Not found
app.use(notFoundHandler);

module.exports = app;