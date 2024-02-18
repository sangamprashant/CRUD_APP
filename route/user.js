const express = require("express");
const { register, login } = require("../controls/user");

const router = express.Router();

//register || POST
router.post("/register", register);
// login || POST
router.post("/login", login);

module.exports = router;
