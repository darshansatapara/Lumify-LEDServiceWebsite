const express = require("express");
const router = express.Router();
const { Login, Registration } = require("../controller/authController.js");

router.post("/register", Registration);
router.post("/login", Login);

module.exports = router;
