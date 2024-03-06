const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
require("../backEnd/db/db");
const app = express();

dotenv.config();

const authController = require("../backEnd/controller/authController");

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  res.send("Hello World!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
