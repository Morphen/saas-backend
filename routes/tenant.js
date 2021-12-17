const express = require("express");

//import controaldor
const { getTenants } = require("../controllers/tenantController");

const tenantsRouter = express.Router();

tenantsRouter.get("/", getTenants);

module.exports = tenantsRouter;
