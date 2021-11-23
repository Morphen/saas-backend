import connection from "../db/connection";

export const registerTenant = (hostname, data) => {
  const { nombre, email, tipo, documento, password } = data;
  connection.query(
    "USE ? ; INSERT INTO USERS (nombre,email,tipo,documento,password) VALUES( ? , ? , ? , ? , ?) ;",
    [hostname, nombre, email, tipo, documento, password],
    function (err, results) {
      console.log(results);
    }
  );
};

export const loginTenant = (hostname, data) => {
  const { email, password } = data;
  connection.query(
    "USE ? ; SELECT FROM USERS WHERE email = ?",
    [email],
    function (err, results) {
      const user = results[0];
      if (user.password === password) {
      }
    }
  );
};

// export const register = (hostname) => {
//   connection.query(
//     "CREATE DATABASE ? ; USE ? ; INSERT INTO",
//     [hostname, hostname],
//     function (err, results) {
//       console.log(results);
//     }
//   );
// };
