const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { login, register } = require("./controller/authController");
require("../backEnd/db/db");
const app = express();

dotenv.config();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/login", login);
app.post("/register", register);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
