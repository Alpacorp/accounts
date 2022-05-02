require("dotenv").config();
const Sequelize = require("sequelize");

// const sequelize = new Sequelize("mysql://root@localhost:3307/social_accounts");

const sequelize = new Sequelize(process.env.CON3CT);

// const sequelize = new Sequelize(
//   "mysql://databaseKeys.:2d68da1d@us-cdbr-east-03.cleardb.com/heroku_cdadabb8d019873"
// );

module.exports = { sequelize };
