const express = require("express");
const userController = require("../controllers/userController");

// creating routes

const router = express.Router();

// defining routes

router.post("/User", userController.createUser);
// router.get('/users', userController.getUsers);
// router.get('/users/:id', userController.getUser);
// router.patch('/users/:id', userController.updateUser);
// router.delete('/users/:id', userController.deleteUser);

module.exports = router;
