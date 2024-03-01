const jwt = require("jsonwebtoken")
const response = require("./../helpers/response")

const isAuthenticated = (req, res, next) => {
  const { authorization } = req.headers;
  
  if (!authorization) {
    console.log("Token is not exist")
    return response.res401(res);

  }

  const token = authorization.split(" ")[1] || authorization;

  try {
    // // Uncomment to use Basic verify jwt token
    // const secret = process.env.JWT_KEY;
    // const jwtDecode = jwt.verify(token, secret);

    // //create user data to use in server, adjust with your data when you create token first time
    // const user = {
    //   id: jwtDecode.id,
    //   email: jwtDecode.email,
    //   name: jwtDecode.name,
    //   role: jwtDecode.role,
    //   token,
    // };

    // req.user = user; //set data to use in the next

    console.log("Anjay Authenticate")
    next();
  } catch (error) {
    console.log(error.message);
    return response.res401(res);
  }
};

module.exports = { isAuthenticated };
