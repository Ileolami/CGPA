/* eslint-disable no-undef */
const jwt = require("jsonwebtoken");
const process = require("process");
require("dotenv").config();

const authenticateUser = async (req, res, next) => {
  // Get token from headers, query parameters, or cookies
  const token = req.header("Authorization")?.replace("Bearer ", "");

  // console.log({ token });

  // console.log(`${process.env.JWT_SECRET}`);

  if (token) {
    try {
      // Verify the token
      // const decodedToken = jwt.verify(token, `${process.env.JWT_SECRET}`);
      const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decodedToken.user;
      // console.log({ decodedToken });
      next(); // Pass control to the next middleware function
    } catch (err) {
      console.log(err);
      // If the token is not valid, return an error
      return res.status(401).json({ message: "Invalid token" });
    }
  } else {
    // No token provided
    return res.status(401).json({ message: "No token provided" });
  }
};

module.exports = authenticateUser;
