const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db/db");
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({
        message:
          "Username, email, password, and confirm password are required.",
      });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "Password and confirm password do not match." });
    }
    // Check if username or email already exists
    const checkQuery = "SELECT * FROM users WHERE email = ?";
    db.query(checkQuery, [email], (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error." });
      }
      if (result.length > 0) {
        return res
          .status(409)
          .json({ message: "Username or email already exists." });
      }
      const userId = uuidv4(); // Generate a unique user ID
      // Insert new user into the database
      const insertUserQuery =
        "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)";
      db.query(insertUserQuery, [userId, username, email, password], (err) => {
        if (err) {
          return res.status(500).json({ message: "Internal server error." });
        }
        res
          .status(201)
          .json({ message: "User registered successfully.", userId });
      });
    });
  } catch (error) {
    res.status(400).send(error);
    res.status(500).json({ error: "An error occurred during registration" });
  }
});

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  }

  const sql = `SELECT * FROM users WHERE username = ? AND password = ?`;
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      return res.status(500).json({ message: "Internal server error." });
    }
    if (result.length === 0) {
      return res.status(401).json({ message: "Invalid username or password." });
    }
    // User authenticated successfully
    res.status(200).json({ message: "Login successful." });
  });
});
module.exports = router;
