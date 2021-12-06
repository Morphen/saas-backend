const express = require("express");
const cors = require("cors");
const db = require("./models");
const productsRouter = require("./routes/products.js");
const usersRouter = require("./routes/users");
const ventasRouter = require("./routes/ventas");

const app = express();
const PORT = 3000 || process.env.PORT;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Routes
app.use("/api/users", usersRouter);
app.use("/api/products", productsRouter);
app.use("/api/compras", ventasRouter)


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
  });
})

