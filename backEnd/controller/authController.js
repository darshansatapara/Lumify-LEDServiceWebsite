const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const db = require("../db/db");
const router = require("express").Router();
const { v4: uuidv4 } = require("uuid");
const dotenv = require("dotenv");
const jwtSecret = "hiIambrother";
dotenv.config();

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    // console.log(name, email, password);
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "name, email, password are required.",
      });
    }

    // Check if the email already exists in the database
    db.query(
      "SELECT * FROM user WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) {
          return res.status(500).json({ message: "Internal server error." });
        }

        if (result.length > 0) {
          // If the email already exists, return a 409 Conflict status code
          return res.status(409).json({ message: "Email already registered." });
        }

        // If the email doesn't exist, proceed with user registration
        const hashPassword = await bcrypt.hash(password.toString(), 10);

        const userId = uuidv4(); // Generate a unique user ID
        const insertUserQuery =
          "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
        db.query(insertUserQuery, [name, email, hashPassword], (err) => {
          if (err) {
            console.log(err);
            return res.status(500).json({ message: "Internal server error." });
          }
          const authToken = jwt.sign({ userId }, jwtSecret);
          return res.status(201).json({
            message: "User registered successfully.",
            userId,
            authToken,
          });
        });
      }
    );
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "An error occurred during registration" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log("i am reach this");
    db.query(
      "SELECT * FROM user WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) {
          return res
            .status(500)
            .json({ error: "An error occurred during login" });
        }

        if (result.length === 0) {
          return res.status(404).json({ message: "User not found." });
        }

        const user = result[0];
        const userId = uuidv4();
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
          return res
            .status(401)
            .json({ message: "Invalid email or password." });
        }

        const authToken = jwt.sign({ userId }, jwtSecret);
        res.status(200).json({ success: true, authToken, email });
      }
    );
  } catch (error) {
    res.status(500).json({ error: "An error occurred during login" });
  }
});

// get user by emailid
router.get("/user/:email", async (req, res) => {
  const email = req.params.email;

  try {
    const sql = "SELECT name FROM user WHERE email = ?";
    db.query(sql, [email], (err, result) => {
      if (err) {
        console.error("Error fetching user details:", err);
        return res.status(500).json({ error: "Internal server error" });
      }

      if (result.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      const user = result[0];
      // console.log(user);
      res.status(200).json(user);
    });
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
