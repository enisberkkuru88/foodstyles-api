const dbCore = require("../service/core");
const { DataTypes } = require("sequelize");
const ToDoDM = dbCore.sequelize.define(
  "todo",
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "todo",
    timestamps: false,
  }
);

module.exports = { ToDoDM };
