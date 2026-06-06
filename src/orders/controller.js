const db = require('../config/db');

class OrderController {
    async createOrder(req, res) {
        try {
            const { product_id, quantity } = req.body;
            const user_id = req.user.id;

            // Fetch product info to check availability and handle pricing calculations
            const [products] = await db.query('SELECT price, stock FROM products WHERE id = ?', [product_id]);
            if (products.length === 0) return res.status(404).json({ message: 'Product not found' });

            const product = products[0];
            if (product.stock < quantity) return res.status(400).json({ message: 'Insufficient stock' });

            const total_price = product.price * quantity;

            // Process order logic inside structured query blocks
            await db.query('UPDATE products SET stock = stock - ? WHERE id = ?', [quantity, product_id]);
            const [result] = await db.query(
                'INSERT INTO orders (user_id, product_id, quantity, total_price) VALUES (?, ?, ?, ?)',
                [user_id, product_id, quantity, total_price]
            );

            res.status(201).json({ message: 'Order placed successfully', orderId: result.insertId, total_price });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getUserOrders(req, res) {
        try {
            const query = `
                SELECT o.id, o.quantity, o.total_price, o.order_date,
                       p.name AS product_name, p.price AS unit_price
                FROM orders o
                JOIN products p ON o.product_id = p.id
                WHERE o.user_id = ?
                ORDER BY o.order_date DESC
            `;
            const [orders] = await db.query(query, [req.user.id]);
            res.status(200).json(orders);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new OrderController();