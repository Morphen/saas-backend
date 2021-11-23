import Sequelize from "sequelize";
export default function (sequelize, DataTypes) {
  return sequelize.define(
    "user",
    {
      id_user: {
        autoIncrement: true,
        type: DataTypes.BIGINT.UNSIGNED,
        allowNull: false,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING(191),
        allowNull: true,
      },
      contraseña: {
        type: DataTypes.STRING(191),
        allowNull: false,
      },
      documento: {
        type: DataTypes.STRING(191),
        allowNull: true,
      },
    },
    {
      sequelize,
      tableName: "user",
      timestamps: false,
      indexes: [
        {
          name: "PRIMARY",
          unique: true,
          using: "BTREE",
          fields: [{ name: "id_user" }],
        },
      ],
    }
  );
}
