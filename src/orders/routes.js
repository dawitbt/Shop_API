const express = require('express');
const orderController = require('./controller');
const authenticate = require('../auth/authMiddleware');
const router = express.Router();

router.post('/', authenticate, orderController.createOrder);
router.get('/', authenticate, orderController.getUserOrders);

module.exports = router;