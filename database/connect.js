const Sequelize = require('sequelize');
// const databaseKeys = require('../src/keys');
// const sequelize = new Sequelize(databaseKeys);

const sequelize = new Sequelize('mysql://root@localhost:8080/users_admin');

// const sequelize = new Sequelize('mysql://bb7f72375032a7:5d91fd8c@us-cdbr-east-03.cleardb.com/heroku_f2dae762950c24e');

// const mysql2 = require('mysql2');

module.exports = {sequelize};