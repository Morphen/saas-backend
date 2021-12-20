"use strict";

const { TokenExpiredError } = require("jsonwebtoken");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          nombre: "Andres Celis",
          email: "andres.celis@correounivalle.edu.co",
          tipo: "C.C",
          password:
            "$2a$10$mARD/qq0PY4YJwTG85HyZORkVISq7CZwT2Y3F/I1vU89UGnspnW620",
          documento: "1114468755",
          rol: "superAdmin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "Tenants",
      [
        {
          nombre: "Andres Celis",
          email: "andres.celis@correounivalle.edu.co",
          tipo: "C.C",
          password:
            "$2a$10$mARD/qq0PY4YJwTG85HyZORkVISq7CZwT2Y3F/I1vU89UGnspnW620",
          documento: "1114468755",
          rol: "superAdmin",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
