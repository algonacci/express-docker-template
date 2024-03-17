const response = require("./../helpers/response")

const notFoundHandler = (req, res, next) => {
  response.res404(res);
};

module.exports = notFoundHandler;
