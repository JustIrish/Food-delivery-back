const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers");

const { validateBody } = require("../../middlewares/validateBody");

const { addOrderSchema } = require("../../models/order");

router.post("/", validateBody(addOrderSchema), ctrl.addOrder);
router.get("/history", ctrl.getOrders);

module.exports = router;
