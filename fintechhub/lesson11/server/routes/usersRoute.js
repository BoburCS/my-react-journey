const express = require("express");
const usersController = require("../controllers/userController");
const productController = require("../controllers/productController");

const router = express.Router();

router.get("/users", usersController.getUsers);
router.post("/users", usersController.postUser);

router.get("/products", productController.getProducts);
router.get("/products/:id", productController.getProduct);

module.exports = router;
