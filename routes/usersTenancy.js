import express from "express";
import { registerTenant, loginTenant } from "../controllers/userController";

//import controaldor
import {
  getPersons,
  postPerson,
  getSinglePerson,
  editPerson,
  deactivePerson,
} from "../controllers/personController.js";
//import isAuth from "../middlewares/isAuth.js";
const usersTenancyRouter = express.Router();

usersTenancyRouter.get("/", getPersons);

usersTenancyRouter.post("/", postPerson);

usersTenancyRouter.get("/:id", getSinglePerson);

usersTenancyRouter.put("/:id/edit", editPerson);

usersTenancyRouter.delete("/:id", deactivePerson);

export default usersTenancyRouter;

