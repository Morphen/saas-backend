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
const productsRouter = express.Router();

productsRouter.get("/", getPersons);

productsRouter.post("/", postPerson);

productsRouter.get("/:id", getSinglePerson);

productsRouter.put("/:id/edit", editPerson);

productsRouter.delete("/:id", deactivePerson);

export default productsRouter;
