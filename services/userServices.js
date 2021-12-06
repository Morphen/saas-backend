const model = require("../models");

exports.findUserByEmail = async (email) => {
    const user = await model.User.findOne({
        where: {
            email
        }
    })

    if (user) {
        return user
    } else return null
}

exports.findUserByEmailTenant = async (email, domain) => {
    const user = await model.User.findOne({
        include: {
            model: model.Tenant,
            where: {
                hostname: domain
            }
        },
        where: {
            email
        }
    })

    if (user) {
        delete user.dataValues['Tenants'];
        return user
    } else return null
}

