const express = require("express");

// import venta controller.
const { addVenta,
    deleteVenta,
    editVenta,
    getVenta,
    getVentas } = require("../controllers/ventaController")


const ventasRouter = express.Router();

ventasRouter.get("/", getVentas);

ventasRouter.post("/", addVenta);

ventasRouter.get("/:id", getVenta);

ventasRouter.put("/:id/edit", editVenta);

ventasRouter.delete("/:id", deleteVenta);

module.exports = ventasRouter;