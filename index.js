import express from "express";
import sequelize from "./db/connection.js";
import cors from "cors";
// import productsRouter from "./routes/products.js";
// import usersRouter from "./routes/users.js";
// import usersTenancyRouter from "./routes/usersTenancy.js";

const app = express();
const PORT = 3000 || process.env.PORT;
const API = "/api/v1";

//Middlewares
app.use(express.json());
app.use(cors());

//Routes
// app.use(API + "/usersTenancy", usersTenancyRouter);
// app.use(API + "/users", usersRouter);
// app.use(API + "/products", productsRouter);

app.listen(PORT, () => {
  console.log(`app listening at http://localhost:${PORT}`);

  sequelize
    .authenticate()
    .then(async () => {
      console.log("conexion exitosa a la base de datos");
    })
    .catch((error) => {
      console.log("conexion fallida a la base de datos");
    });
});
