const express = require("express")
const cors = require("cors")
const db = require("./models")
// import productsRouter from "./routes/products.js";
const usersRouter = require("./routes/users");
// import usersTenancyRouter from "./routes/usersTenancy.js";

const app = express();
const PORT = 3000 || process.env.PORT;

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//Routes
// app.use(API + "/usersTenancy", usersTenancyRouter);
app.use("/users", usersRouter);
// app.use(API + "/products", productsRouter);


db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
  });
})

