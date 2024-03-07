const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db/db");
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
require("dotenv").config();

const register=router.post("/register", async (req, res) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({
        message:
          "Username, email, password, and confirm password are required.",
      });
    }
    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ message: "Password and confirm password do not match." });
    }
    
    const hashPassword = await bcrypt.hash(password, 10);
    const userId = uuidv4(); // Generate a unique user ID
    const insertUserQuery =
      "INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?)";
    db.query(insertUserQuery, [userId, username, email, hashPassword], (err) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error." });
      }
      res
        .status(201)
        .json({ message: "User registered successfully.", userId });
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred during registration" });
  }
});

const login = router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required." });
    }
    
    const sql = `SELECT * FROM users WHERE email = ?`;
    db.query(sql, [email], async (err, result) => {
      if (err) {
        return res.status(500).json({ message: "Internal server error." });
      }
      if (result.length === 0) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      const user = result[0];
      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ message: "Invalid email or password." });
      }

      // Generate JWT token
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: "1h",
      });
      res.status(200).json({ message: "Login successful.", token });
    });
  } catch (error) {
    res.status(500).json({ error: "An error occurred during login" });
  }
});

module.exports = {login,register};
