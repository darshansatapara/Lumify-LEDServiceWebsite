

const express = require("express");
const router = express.Router();
const db = require("../db/db"); // Assuming you have a database connection module

// Route to fetch product data
router.get("/products", (req, res) => {
  // Query the database to fetch product data
  const query = "SELECT * FROM products"; // Adjust the query according to your database schema

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      return res.status(500).json({ error: "Internal server error" });
    }

    // Send the product data as JSON response
    res.json(results);
  });
});

module.exports = router;
