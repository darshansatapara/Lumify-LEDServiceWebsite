require("dotenv").config();
const mysql = require("mysql");
const password = process.env.PASSWORD;

const db = mysql.createConnection({   
    host: "localhost",
    user: "root",
    password: password,
    database: "logindata",
  });

  db.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to database:', err);
      return;
    }
    console.log('Connected to database');
    connection.release(); // Release the connection
  });
  
module.exports = db;