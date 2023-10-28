const Sequelize = require("sequelize");

const sequelize = new Sequelize("testdb", "root", "cdac", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
