const Sequelize = require("sequelize");
module.exports = function (sequelize, DataTypes) {
  return sequelize.define(
    "event",
    {
      eventid: {
        type: DataTypes.STRING(20),
        allowNull: false,
        primaryKey: true,
      },
      eventdate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        defaultValue: Sequelize.Sequelize.literal("CURRENT_DATE"),
      },
      location: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      adminid: {
        type: DataTypes.STRING(20),
        allowNull: false,
        references: {
          model: "admin",
          key: "gm_id",
        },
      },
    },
    {
      sequelize,
      tableName: "event",
      schema: "public",
      hasTrigger: true,
      timestamps: false,
      indexes: [
        {
          name: "event_pkey",
          unique: true,
          fields: [{ name: "eventid" }],
        },
      ],
    }
  );
};
