const model = require("../models");
const { Op } = require("sequelize");

exports.getTenants = async (req, res) => {
  const tenant = await model.Tenant.findAll({
    where: {
      [Op.not]: 1,
    },
  });
  res.send(tenant);
};

exports.editTenants = async (req, res) => {};
