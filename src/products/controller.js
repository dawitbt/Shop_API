const db = require('../config/db');

class ProductController {
    async createProduct(req, res) {
        try {
            const { name, description, price, stock } = req.body;
            const [result] = await db.query(
                'INSERT INTO products (name, description, price, stock) VALUES (?, ?, ?, ?)',
                [name, description, price, stock]
            );
            res.status(201).json({ message: 'Product created', productId: result.insertId });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllProducts(req, res) {
        try {
            const [products] = await db.query('SELECT * FROM products');
            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getProductById(req, res) {
        try {
            const [products] = await db.query('SELECT * FROM products WHERE id = ?', [req.params.id]);
            if (products.length === 0) return res.status(404).json({ message: 'Product not found' });
            res.status(200).json(products[0]);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateProduct(req, res) {
        try {
            const { name, description, price, stock } = req.body;
            await db.query(
                'UPDATE products SET name = ?, description = ?, price = ?, stock = ? WHERE id = ?',
                [name, description, price, stock, req.params.id]
            );
            res.status(200).json({ message: 'Product updated successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async deleteProduct(req, res) {
        try {
            await db.query('DELETE FROM products WHERE id = ?', [req.params.id]);
            res.status(200).json({ message: 'Product deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new ProductController();