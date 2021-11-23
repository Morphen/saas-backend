import { Sequelize } from "sequelize";

const sequelize = new Sequelize("saas", "root", "Celis258**", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;
