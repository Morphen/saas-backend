const express = require("express");

//import controaldor
const { loginUser, registerUser } = require("../controllers/userController.js")

const usersRouter = express.Router();

/* usersRouter.get("/login", loginUser);
 */
usersRouter.post("/register", registerUser);

module.exports = usersRouter;
