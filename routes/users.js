import express from "express";
import { registerTenant, loginTenant } from "../controllers/userController";

//import controaldor
import { loginUser, registerUser } from "../controllers/userController.js";
//import isAuth from "../middlewares/isAuth.js";
const usersRouter = express.Router();

usersRouter.get("/login", loginUser);

usersRouter.post("/register", registerUser);

export default usersRouter;
