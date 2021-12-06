const model = require("../models");

exports.findTenantByDomain = async (domain) => {
    const tenant = await model.Tenant.findOne({
        where: {
            hostname: domain
        }
    })

    if (tenant){
        return tenant
    } else return null
}

exports.findTenantByHostname = async (hostname) => {
    const tenant = await model.Tenant.findOne({
        where: {
            hostname
        }
    })

    if (tenant){
        return tenant
    } else return null
}