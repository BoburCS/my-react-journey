const express = require("express");
const usersController = require("../controllers/userController");

const router = express.Router();

router.get("/users", usersController.getUsers);
router.post("/users", usersController.postUser);

module.exports = router;
