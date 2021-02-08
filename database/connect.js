const Sequelize = require('sequelize');
const databaseKeys = require('../src/keys')
// const sequelize = new Sequelize(databaseKeys);

const sequelize = new Sequelize('mysql://root@localhost:8080/users_admin');

// const mysql2 = require('mysql2');

module.exports = {sequelize};