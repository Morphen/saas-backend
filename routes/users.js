const express = require("express");

//import controaldor
const { loginUser, registerUser } = require("../controllers/userController.js");
const { tenantExist } = require("../middlewares/tenantExist.js");
const { userExist } = require("../middlewares/userExist.js");

const usersRouter = express.Router();

usersRouter.post("/login", loginUser);
 
usersRouter.post("/register", userExist, registerUser);

module.exports = usersRouter;
