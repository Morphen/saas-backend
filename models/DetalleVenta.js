module.exports = (sequelize, DataTypes) => {
    const DetalleVenta = sequelize.define("DetalleVenta", {
      cantidad: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    })
  
    DetalleVenta.associate = models => {
        DetalleVenta.belongsTo(models.Product, {
            onDelete: "cascade"
        });

        DetalleVenta.belongsTo(models.Venta, {
            onDelete: "cascade"
        });
    }
  
    return DetalleVenta;
  }