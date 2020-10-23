const express = require("express");

const {
  getProductsByQuery,
  getProductById,
} = require("./../controllers/product.controller");

const { additionalData } = require("./../middlewares/common");

const router = express.Router();

router.get("/", additionalData, getProductsByQuery);

router.get("/:id", additionalData, getProductById);

module.exports = router;
