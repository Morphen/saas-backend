import connection from "../db/connection";

export const registerUser = (req, res) => {
  const { nombre, email, password, tipo, documento, domain } = req.body;
  connection.query(
    `USE SAAS ; INSERT INTO USERS (nombre,email,password) VALUES( ? , ? , ?); 
    INSERT INTO HOSTNAMES (fqdn) VALUES (?);
    CREATE DATABASE ? ;
    USE ? ;
    CREATE TABLE PRODUCTS {
        id: int NOT NULL AUTO_INCREMENT,
        precio : int not null,
        nombre : varchar(50) not null,
        descripcion : varchar(50) not null,
        PRIMARY_KEY (id)
    };
    CREATE TABLE USERS {
        id: int NOT NULL AUTO_INCREMENT,
        nombre : varchar(50) not null,
        email : varchar(50) not nullnull,
        tipo : varchar(50) not null,
        documento : varchar(50) not null,
        password : varchar(50) not null,
        PRIMARY_KEY(id)
    };
    INSERT INTO USERS (nombre,email,tipo,documento,password) VALUES(? ,? ,? ,? ,?)
    `,
    [
      (nombre,
      email,
      password,
      domain,
      domain,
      domain,
      nombre,
      email,
      tipo,
      documento,
      password),
    ],
    function (err, results) {
      console.log(results);
    }
  );
};

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
