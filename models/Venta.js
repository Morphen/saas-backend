module.exports = (sequelize, DataTypes) => {
    const Venta = sequelize.define("Venta", {
      direccion: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
      Total: {
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    })
  
    Venta.associate = models => {
        Venta.belongsTo(models.User, {
            onDelete: "cascade"
        });

        Venta.hasMany(models.DetalleVenta, {
            onDelete: "cascade"
          });
    }
  
    return Venta;
  }