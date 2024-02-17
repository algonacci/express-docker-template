const isAuthenticated = (req, res, next) => {
  console.log("Anjay authenticated");
  next();
};

module.exports = { isAuthenticated };
