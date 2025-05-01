const express = require('express');
const router = express.Router();
const userController = require('.src/controllers/userController.js');

router.get('/users', userController.getAll);
router.get('/users/:id', userController.getById);

module.exports = router;
