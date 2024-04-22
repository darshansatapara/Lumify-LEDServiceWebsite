const express = require("express");
const router = express.Router();
const db = require("../db/db");
const multer = require("multer");
const fs = require("fs");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
// POST route for adding a product
const upload = multer({ storage: storage });

router.post("/upload/product", upload.single("image"), (req, res) => {
  const { name, description, price } = req.body;
  const imagePath = req.file.path;
  const imageBase64 = fs.readFileSync(imagePath, "base64");

  const product = {
    ProductName: name,
    description: description,
    price: price,
    ProductImage: imageBase64,
  };

  db.query("INSERT INTO products SET ?", product, (err, result) => {
    if (err) throw err;
    console.log("Product added successfully!");
    res.send("Product added successfully!");
  });
});

// Route to get all products
router.get("/fatchall/products", (req, res) => {
  const selectQuery = "SELECT * FROM products";
  db.query(selectQuery, (err, results) => {
    if (err) {
      console.error("Error fetching products:", err);
      res.status(500).send("Error fetching products");

    } else {
      res.json(results);
      console.log(results);
      
    }
  });
});

module.exports = router;
