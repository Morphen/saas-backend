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

app.post("/registerTenant", (req, res) => {
  const { hostname } = req.body;
  registerTenant(hostname, req.body);
  // registrar un usuario cliente en la base de datos con nombre ${hostname}
});
app.post("/loginTenant", (req, res) => {
  const { hostname } = req.body;
  loginTenant(hostname, req.body);

  // logear un usuario cliente en la base de datos con nombre ${hostname}
});
