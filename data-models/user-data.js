const dbCore = require('../service/core');
const { DataTypes } = require("sequelize");
const UserDM = dbCore.sequelize.define('todo_user', {
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey:true
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    // Other model options go here
  tableName: 'todo_user',
  timestamps: false
  });


  module.exports={UserDM};
  