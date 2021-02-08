const Sequelize = require('sequelize');
// const databaseKeys = require('../src/keys');
// const sequelize = new Sequelize(databaseKeys);

// const sequelize = new Sequelize('mysql://root@localhost:8080/users_admin');

const sequelize = new Sequelize('mysql://be9347c52cb2f1:2d68da1d@us-cdbr-east-03.cleardb.com/heroku_cdadabb8d019873');

// const mysql2 = require('mysql2');

module.exports = {sequelize};