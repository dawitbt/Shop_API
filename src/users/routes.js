const express = require('express');
const userController = require('./controller');
const authenticate = require('../auth/authMiddleware');
const router = express.Router();

router.get('/profile', authenticate, userController.getProfile);
router.put('/profile', authenticate, userController.updateProfile);

module.exports = router;