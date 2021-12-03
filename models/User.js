module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    nombre: {
      type: DataTypes.STRING(191),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(191),
      allowNull: false,
    },
    tipo: {
      type: DataTypes.STRING(191)
    },
    password: {
      type: DataTypes.STRING(191),
      allowNull: false,
    },
    documento: {
      type: DataTypes.STRING(191)
    },
  },
  )

  User.associate = models => {
    User.belongsToMany(models.Tenant, { through: 'User_Tenant' });
  }

  return User;
}