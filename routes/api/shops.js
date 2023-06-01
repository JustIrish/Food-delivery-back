const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/shops");

router.get("/", ctrl.getShops);

module.exports = router;
