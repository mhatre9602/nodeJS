const Sequelize = require("sequelize");

const sequelize = require("../util/databaseSequelize");

const Patient = sequelize.define("patient", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: Sequelize.TEXT,

  email: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  phone: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
});

module.exports = Patient;
