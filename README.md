````md
# 🛒 Simple Shop API

A lightweight and scalable **RESTful e-commerce backend API** built with **Node.js, Express, and MySQL (raw SQL queries)**.  
This project demonstrates modular backend architecture, authentication, and core e-commerce workflows such as product management and order processing.

---

## 📌 Features

- 🔐 User authentication (Register/Login with JWT)
- 👤 Role-based access control (extensible)
- 📦 Product management (CRUD operations)
- 🛒 Order management system
- 🔑 Password hashing with bcrypt
- 🗄️ MySQL database using raw SQL queries
- 🧩 Modular project structure (separation of concerns)
- 🔒 Protected routes using JWT middleware

---

## 🏗️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Authentication:** JSON Web Token (JWT)
- **Security:** bcrypt password hashing
- **Architecture:** Modular MVC-style structure

---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/dawitbt/Shop_API.git
cd Shop_API
````

---

### 2. Install dependencies

```bash
npm install
```

---

### 3. Configure environment variables

Create a `.env` file in the root directory:

```env
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=simple_shop
JWT_SECRET=your_secret_key
PORT=3000
```

---

### 4. Setup database

Make sure MySQL is running, then create the database:

```sql
CREATE DATABASE simple_shop;
```

Import schema:

```bash
mysql -u root -p simple_shop < schema.sql
```

---

### 5. Run the server

```bash
npm run dev
```

The server will start at:

```
http://localhost:3000
```

---

## 📡 API Documentation

### 👥 Authentication

| Method | Endpoint           | Description   | Auth Required |
| ------ | ------------------ | ------------- | ------------- |
| POST   | /api/auth/register | Register user | ❌             |
| POST   | /api/auth/login    | Login user    | ❌             |

---

### 🔹 Register User

**Endpoint:** `POST /api/auth/register`

**Request Body:**

```json
{
  "name": "Abebe Kebede",
  "email": "abebe@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "Abebe Kebede",
    "email": "abebe@example.com"
  }
}
```

---

### 🔹 Login User

**Endpoint:** `POST /api/auth/login`

**Request Body:**

```json
{
  "email": "abebe@example.com",
  "password": "123456"
}
```

**Response:**

```json
{
  "token": "jwt_token_here",
  "user": {
    "id": 1,
    "name": "Abebe Kebede",
    "email": "abebe@example.com"
  }
}
```

---

### 📦 Products

| Method | Endpoint          | Description       | Auth Required |
| ------ | ----------------- | ----------------- | ------------- |
| GET    | /api/products     | Get all products  | ❌             |
| GET    | /api/products/:id | Get product by ID | ❌             |
| POST   | /api/products     | Create product    | ✅             |
| PUT    | /api/products/:id | Update product    | ✅             |
| DELETE | /api/products/:id | Delete product    | ✅             |

---

### 🔹 Create Product

**Endpoint:** `POST /api/products`
**Headers:** `Authorization: Bearer <token>`

**Request Body:**

```json
{
  "name": "Mechanical Keyboard",
  "description": "RGB backlit mechanical keyboard",
  "price": 89.99,
  "stock": 15
}
```

**Response:**

```json
{
  "message": "Product created successfully",
  "productId": 1
}
```

---

### 🛒 Orders

| Method | Endpoint    | Description     | Auth Required |
| ------ | ----------- | --------------- | ------------- |
| POST   | /api/orders | Create order    | ✅             |
| GET    | /api/orders | Get user orders | ✅             |

---

### 🔹 Create Order

**Endpoint:** `POST /api/orders`
**Headers:** `Authorization: Bearer <token>`

**Request Body:**

```json
{
  "product_id": 1,
  "quantity": 2
}
```

**Response:**

```json
{
  "message": "Order placed successfully",
  "orderId": 1,
  "total_price": 179.98
}
```

---

## 📁 Project Structure

```
src/
├── config/        # Database configuration
├── controllers/   # Business logic
├── routes/        # API routes
├── middleware/    # Auth & validation middleware
├── models/        # SQL queries / data layer
├── utils/         # Helper functions
└── app.js         # Entry point
```

---

## 🔐 Security Features

* Passwords hashed using bcrypt
* JWT authentication for protected routes
* Environment variables for sensitive data
* Input validation (if implemented)

---

## 🚀 Future Improvements

* Add Swagger API documentation
* Implement pagination for products
* Add role-based admin panel
* Integrate payment gateway
* Add unit testing (Jest / Mocha)
* Switch to ORM (Prisma or Sequelize) for scalability

---

## 📌 Notes

* Built using raw SQL for learning database fundamentals
* Modular architecture for scalability and maintainability
* Designed as a portfolio project for backend development roles

---

## 👨‍💻 Author

**Dawit Betela**
Backend Developer | Node.js | MySQL

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE)

```
