const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "testdb",
  password: "cdac",
});

module.exports = pool.promise();
