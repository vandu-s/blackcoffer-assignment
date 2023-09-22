const express = require("express");
const router = express.Router();
const { getAllEnergies } = require("../controller/energy");

router.route("/").get(getAllEnergies);
module.exports = router;
