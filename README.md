# Simple Shop API

A lightweight backend API built with Node.js, Express, and MySQL using raw SQL queries.  
The project follows a modular structure with separation of concerns for scalability.

---

## ⚙️ Setup Instructions

### Install dependencies
npm install

### Configure environment

Create a .env file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=simple_shop
JWT_SECRET=your_secret_key
PORT=3000

### Run database

mysql -u root -p simple_shop < schema.sql

### Start server

npm run dev

---

# 📌 API Endpoints

---

## 👥 Authentication

| Method | Endpoint            | Description        | Auth |
|--------|---------------------|--------------------|------|
| POST   | /api/auth/register  | Register new user  | ❌   |
| POST   | /api/auth/login     | Login user         | ❌   |

### Register User

POST /api/auth/register

Request:
{
  "name": "Abebe Kebede",
  "email": "abebe@example.com",
  "password": "123456"
}

Response:
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "Abebe Kebede",
    "email": "abebe@example.com"
  }
}

---

## 📦 Products

| Method | Endpoint            | Description        | Auth |
|--------|---------------------|--------------------|------|
| GET    | /api/products       | Get all products   | ❌   |
| GET    | /api/products/:id   | Get product by id  | ❌   |
| POST   | /api/products       | Create product     | ✅   |
| PUT    | /api/products/:id   | Update product     | ✅   |
| DELETE | /api/products/:id  | Delete product     | ✅   |

### Create Product

POST /api/products

Headers:
Authorization: Bearer <token>

Request:
{
  "name": "Mechanical Keyboard",
  "description": "RGB Backlit keyboard",
  "price": 89.99,
  "stock": 15
}

Response:
{
  "message": "Product created",
  "productId": 1
}

---

## 🛒 Orders

| Method | Endpoint       | Description     | Auth |
|--------|----------------|-----------------|------|
| POST   | /api/orders    | Create order    | ✅   |
| GET    | /api/orders    | Get user orders | ✅   |

### Create Order

POST /api/orders

Headers:
Authorization: Bearer <token>

Request:
{
  "product_id": 1,
  "quantity": 2
}

Response:
{
  "message": "Order placed successfully",
  "orderId": 1,
  "total_price": 179.98
}

---

## 📌 Notes

- JWT authentication used for protected routes
- Passwords hashed using bcrypt
- MySQL used with raw SQL queries
- Modular architecture (auth, products, orders)
