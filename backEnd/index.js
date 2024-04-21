const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const port = 5000;
dotenv.config();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", require("./controller/authController"));
app.use("/api/items", require("./controller/ProductController"));
app.use("/api/admin", require("./controller/AdminLoginController"));
app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
