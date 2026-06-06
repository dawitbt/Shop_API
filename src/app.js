const express = require('express');
const authRoutes = require('./auth/routes');
const userRoutes = require('./users/routes');
const productRoutes = require('./products/routes');
const orderRoutes = require('./orders/routes');

const app = express();

// Body Parser Middleware
app.use(express.json());

// Main Root Route
app.get('/', (req, res) => {
    res.status(200).json({ status: "API is operational", system: "Modular Monolith Shop Server" });
});

// Mounted Functional Modules
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Global Error Handler Exception Boundary
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong on our end!' });
});

module.exports = app;