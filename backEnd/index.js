const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

require("dotenv").config();
const app = express();
app.use(cors());
app.use(express.json());

const password = process.env.PASSWORD;
const db = mysql.createConnection({   
  host: "localhost",
  user: "root",
  password: password,
  database: "college",
});

app.get("/register", (req, res) => {
  const sql = "INSERT INTO login (username,email, password) VALUES (?)";
  const values = [req.body.name, req.body.email, req.body.password];
  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error:", err);
      return res.status(500).json({ error: "An error occurred" });
    }
    console.log("Registration successful");
    return res.status(200).json({ message: "Registration successful" });
  });
 
});

app.listen(8000, () => {
  console.log("listening on 8000");
});
