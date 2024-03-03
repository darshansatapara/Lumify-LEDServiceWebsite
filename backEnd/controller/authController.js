const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db/db");
require("dotenv").config();

const Registration = async (req, res) => {
  try {
    const hashPassword = bcrypt.hash(req.body.password, 10);

    const sql = "INSERT INTO users (name, email, password) VALUES (?, ?, ?)";
    const VALUES = [req.body.name, req.body.email, hashPassword];
    await db.query(sql, VALUES);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during registration" });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const sql = "SELECT * FROM users WHERE email = ?";
    const [user] = await db.query(sql, [email]);
    const token = jwt.sign({ email: email }, process.env.JWT_TOKEN, {
      expiresIn: "1h",
    });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ error: "Invalid email or password" });
    }
    res.status(200).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred during registration" });
  }
};
export default {
  Registration,
  Login,
};
