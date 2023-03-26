const { Sequelize, DataTypes, Model } = require('sequelize');

//init ORM
const sequelize = new Sequelize({
    dialect: 'postgres',
    username: 'postgres',
    database:'foodstyles',
    password:'postgres',
    options:{schema:'public'}
  });

  //Test Connection 
 async function testConnection(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
        return true;
      } catch (error) {
        console.error('Unable to connect to the database:', error);
        return false;
      }
 }

 //
 

 module.exports = {sequelize,testConnection}
  