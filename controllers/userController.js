const model = require("../models");
const User = require("../models/User");


exports.registerUser = async function (req, res) {
  const { nombre, email, password, tipo, documento, domain, hostname } = req.body;
  if (domain.includes("localhost")) {
    const user = await model.User.create({
      nombre,
      email,
      tipo,
      contraseña: password,
      documento,
    })
    const tenant = await model.Tenant.create({
      hostname
    })
    await user.addTenant([tenant, 1]);
  }
  res.send("ok")
};


/*
export const loginUser = (req, res) => {
  const { email, password, domain } = req.body;
  connection.query(
    "USE SAAS ; SELECT * FROM USERS WHERE email = ?",
    [email],
    function (err, results) {
      const user = results[0];
      if (user.password === password) {
        res.send("logeo existoso como usuario dueño de dominio");
      }
      res.status(400);
      res.send("Error de logeo");
    }
  );
}; */

// export const register = (hostname) => {
//   connection.query(
//     "CREATE DATABASE ? ; USE ? ; INSERT INTO",
//     [hostname, hostname],
//     function (err, results) {
//       console.log(results);
//     }
//   );
// };
