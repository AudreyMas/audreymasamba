const mysql = require('mysql');
const dotenv = require('dotenv').config();
const connection = mysql.createConnection({
  host: `localhost`,
  // port     : `3306`,
  user: `root`, //completer avec vos infos
  password: `${process.env.DB_PASS}`, //completer avec vos infos
  database: `db_portfolio` //completer avec vos infos
});

connection.connect(err => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to the MySQL server');
  }
});


console.log(connection);

module.exports = connection;