const model = require("../models");
const tenantServices = require("../services/tenantServices");
const productServices = require("../services/productServices");

exports.addProduct = async (req, res) => {
  const { nombre, descripcion, price, domain, stock, imagen } = req.body;
  const tenantTemp = await tenantServices.findTenantByDomain(domain);

  if (tenantTemp) {
    const [product, created] = await model.Product.findOrCreate({
      where: { nombre },
      defaults: {
        nombre,
        descripcion,
        price,
        stock,
        imagen,
      },
    });
    if (created) {
      await product.setTenant(tenantTemp);

      res.send(product);
    } else res.status(400).send("el producto ya existe");
  } else res.status(400).send("no existe el tenant");
};

exports.getProduct = async (req, res) => {
  const product = await productServices.findProductInTenant(
    req.params.id,
    req.body.domain
  );
  !product ? res.status(400).send("Product not found!") : res.send(product);
};

exports.getProducts = async (req, res) => {
  const { domain } = req.body;
  const products = await productServices.findAllProductInTenant(domain);
  res.send(products);
};

exports.editProduct = async (req, res) => {
  const id = req.params.id;
  if (await productServices.findProductInTenant(id, req.body.domain)) {
    await model.Product.update(req.body, {
      where: {
        id,
      },
    });
    res.send("producto modificado con exito");
  } else res.status(400).send("no existe el producto");
};

exports.deleteProduct = async (req, res) => {
  const id = req.params.id;
  const product = await productServices.findProductInTenant(
    id,
    req.body.domain
  );
  if (product) {
    await product.destroy();
    res.send("producto eliminado con exito");
  } else res.status(400).send("no existe el producto");
};
