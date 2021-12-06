const model = require("../models");

exports.findProductInTenant = async (id, domain) => {
    const product = await model.Product.findOne({
        include: {
            model: model.Tenant,
            where: {
                hostname: domain
            }
        },
        where: {
            id
        }
    })

    if (product) {
        delete product.dataValues['Tenant'];
        return product
    } else return null
}

exports.findAllProductInTenant = async (domain) => {
    const products = await model.Product.findAll({
        include: {
            model: model.Tenant,
            where: {
                hostname: domain
            }
        }
    });
    if (products) {
        products.forEach(element => {
            delete element.dataValues['Tenant'];
        });
        return products
    } else return null
}
