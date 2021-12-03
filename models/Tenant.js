module.exports = (sequelize, DataTypes) => {
  const Tenant = sequelize.define("Tenant",
    {
      hostname: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
      estado: {
        type: DataTypes.BOOLEAN,
        default: true
      },
    },
  )

  Tenant.associate = models => {

    Tenant.associate = models => {
      Tenant.belongsToMany(models.User, { through: 'User_Tenant' });
    }
    
    Tenant.hasMany(models.Product, {
      onDelete: "cascade"
    });
  }

  return Tenant;
}