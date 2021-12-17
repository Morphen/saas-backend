const model = require("../models");

exports.getTenants = async (req, res) => {
  const tenant = await model.Tenant.findAll();
  res.send(tenant);
};
