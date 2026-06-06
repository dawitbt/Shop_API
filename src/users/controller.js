const db = require('../config/db');
const bcrypt = require('bcrypt');

class UserController {
    async getProfile(req, res) {
        try {
            const [users] = await db.query('SELECT id, name, email, created_at FROM users WHERE id = ?', [req.user.id]);
            if (users.length === 0) return res.status(404).json({ message: 'User not found' });
            
            res.status(200).json(users[0]);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async updateProfile(req, res) {
        try {
            const { name, password } = req.body;
            let query = 'UPDATE users SET name = ?';
            let params = [name];

            if (password) {
                const hashedPassword = await bcrypt.hash(password, 10);
                query += ', password = ?';
                params.push(hashedPassword);
            }

            query += ' WHERE id = ?';
            params.push(req.user.id);

            await db.query(query, params);
            res.status(200).json({ message: 'Profile updated successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports = new UserController();