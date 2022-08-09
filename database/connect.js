require("dotenv").config();
const Sequelize = require("sequelize");

const devEnv = process.env.DEV_ENV;
let sequelize = "";

if (devEnv === "true") {
  sequelize = new Sequelize(process.env.CON3CTLO);
  console.log("local connection");
} else {
  sequelize = new Sequelize(process.env.CON3CTHE);
  console.log("heroku connection");
}

console.log(devEnv);

module.exports = { sequelize };
