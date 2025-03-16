const express = require("express");
const { calculate } = require("../service/calculate");

const router = express.Router();

router.post("/calculate", calculate);

module.exports = router;
