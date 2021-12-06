const { Op } = require("sequelize")
const model = require("../models");

exports.userExist = async (req, res, next) => {
    const { nombre, email, domain } = req.body;

    const userTemp = await model.User.findOne({
        include: {
            model: model.Tenant,
            where: {
                hostname: domain
            }
        },
        where: {
            [Op.or]: [
                { nombre },
                { email }
            ]
        }
    });

    if (!userTemp) {
        next();
    } else {
        if (userTemp.nombre === nombre && userTemp.email === email) res.status(400).send("El usuario con ese nombre y con ese email ya existe");
        else if (userTemp.email === email) res.status(400).send("El usuario con ese email ya existe");
        else res.status(400).send("El usuario con ese nombre ya existe");
    }
};