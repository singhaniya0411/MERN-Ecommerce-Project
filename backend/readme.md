# 🧶 Embusshh - Crochet E-Commerce Website (Backend)

**Embusshh** backend is built using the MERN stack, enabling seamless management of crochet products, user authentication, orders, and payments using Razorpay and Stripe.

## 🚀 Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ORM)
- **Authentication**: JWT (JSON Web Token), bcrypt for password hashing
- **Payment Integration**: Razorpay, Stripe
- **Cloud Storage**: Cloudinary (for product images)
- **API Testing**: Postman
- **Environment Management**: dotenv
- **Middleware**: cors, multer, validator

## 📂 Folder Structure

```
backend/
│── config/
│   ├── cloudinary.js  # Cloudinary config for image storage
│   ├── mongodb.js     # MongoDB connection setup
│── controllers/
│   ├── cartController.js   # Handles cart operations
│   ├── orderController.js  # Handles order processing
│   ├── productController.js # Manages product CRUD operations
│   ├── userController.js   # Handles user authentication & profiles
│── middleware/
│   ├── adminAuth.js  # Middleware for admin authentication
│   ├── auth.js       # Middleware for user authentication
│   ├── multer.js     # Middleware for file uploads
│── models/
│   ├── orderModel.js   # Order schema
│   ├── productModel.js # Product schema
│   ├── userModel.js    # User schema
│── routes/
│   ├── cartRoute.js    # Routes for cart management
│   ├── orderRoute.js   # Routes for orders
│   ├── productRoute.js # Routes for product-related operations
│   ├── userRoute.js    # Routes for user authentication & profile
│── package.json        # Dependencies & scripts
│── package-lock.json   # Dependency lock file
│── server.js           # Express server entry point
│── .env                # Store secret or API keys
```

## ⚡ Getting Started

### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/embusshh-backend.git
cd embusshh-backend
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up environment variables  
Create a `.env` file in the root directory and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

### 4️⃣ Run the backend server
```sh
npm start
```
Your backend will run at **`http://localhost:5000/`**.

## ✨ Features

### 🛍️ User Features:
- **User Authentication** (Register/Login)
- **Browse & Search Crochet Products**
- **Add to Cart & Place Orders**
- **Secure Payment Processing with Razorpay & Stripe**

### 🔑 Admin Features:
- **Product Management** (Add, Edit, Delete Products)
- **User Management** (View & Manage Users)
- **Order Management** (Update Order Status, Process Refunds)

## 📜 API Endpoints

### 🔹 Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### 🔹 Products
- `GET /api/products` - Get all products
- `POST /api/products` - Add new product (Admin)
- `DELETE /api/products/:id` - Delete a product (Admin)

### 🔹 Orders
- `GET /api/orders` - Get user orders
- `POST /api/orders` - Place new order
- `PUT /api/orders/:id` - Update order status (Admin)

## 🛠️ Deployment

To deploy on **Render** or **Vercel**:

1. **Set up environment variables** in your hosting platform.
2. **Deploy to Render** (Recommended for backend):
   ```sh
   git push render main
   ```
3. **Deploy to Vercel** (For full-stack hosting):
   ```sh
   vercel deploy
   ```

## 📜 License

This project is licensed under the **MIT License**.

## ✨ Contributing

Contributions are welcome! Fork the repo and submit a pull request.

## 💡 Need Help?
If you have any questions, feel free to open an issue. 🚀
