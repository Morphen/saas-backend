module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product",
        {
            nombre: {
                type: DataTypes.STRING(191),
                allowNull: false,
            },
            descripcion: {
                type: DataTypes.STRING(191),
                allowNull: false,
            },
            price: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
    )

    Product.associate = models => {
        Product.belongsTo(models.Tenant, {
            onDelete: "cascade"
        });
    }

    return Product;
}