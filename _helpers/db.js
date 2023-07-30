var mysql = require("mysql2");
var connection = mysql.createConnection({
  host: "localhost",
  user: "indigo",
  password: "indigo",
  database: "indigoHackathon",
  port: 3307,
});

connection.connect();

module.exports = connection;
