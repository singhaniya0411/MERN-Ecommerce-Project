# 🛠️ Embusshh - Full Stack E-commerce Platform

**Embusshh** is a full-stack MERN-based e-commerce website for selling crochet products, featuring a user-friendly shopping experience, admin controls, and secure payment integration with Stripe and Razorpay.

---
## 🚀 Tech Stack

### **Frontend** (Customer & Admin Panel)
- React.js
- Tailwind CSS
- Axios (API calls)
- Context API (State Management)
- JWT Authentication

### **Backend**
- Node.js
- Express.js
- MongoDB (Mongoose ORM)
- Cloudinary (Image Storage)
- Multer (File Uploads)
- Bcrypt (Password Hashing)
- JSON Web Token (JWT Authentication)
- Validator (Data Validation)

### **Payment Gateway**
- Stripe
- Razorpay (Wroking on it.)

---
## 📂 Folder Structure

```
Embusshh/
│── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Bestseller.jsx
│   │   │   ├── CartTotal.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── LatestCollection.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── NewsletterBox.jsx
│   │   │   ├── Policy.jsx
│   │   │   ├── ProductItem.jsx
│   │   │   ├── RelatedProduct.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   ├── Title.jsx
│   │   ├── pages/
│   │   │   ├── About.jsx
│   │   │   ├── Cart.jsx
│   │   │   ├── Collection.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Orders.jsx
│   │   │   ├── PlaceOrder.jsx
│   │   │   ├── Product.jsx
│   │   │   ├── Verify.jsx
│   │   ├── context/
│   │   │   ├── ShopContext.js
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   ├── main.jsx
│── backend/
│   ├── config/
│   │   ├── cloudinary.js
│   │   ├── mongodb.js
│   ├── controllers/
│   │   ├── cartController.js
│   │   ├── orderController.js
│   │   ├── productController.js
│   │   ├── userController.js
│   ├── middleware/
│   │   ├── adminAuth.js
│   │   ├── auth.js
│   │   ├── multer.js
│   ├── models/
│   │   ├── orderModel.js
│   │   ├── productModel.js
│   │   ├── userModel.js
│   ├── routes/
│   │   ├── cartRoute.js
│   │   ├── orderRoute.js
│   │   ├── productRoute.js
│   │   ├── userRoute.js
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│── admin-panel/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   ├── pages/
│   │   │   ├── Add.jsx
│   │   │   ├── List.jsx
│   │   │   ├── Order.jsx
│   │   ├── context/
│   │   │   ├── AdminContext.js
│   ├── App.jsx
│   ├── index.jsx
│   ├── package.json
│   ├── tailwind.config.js
│   ├── .env
```
---
## ⚡ Getting Started

### 1️⃣ Clone the repository
```sh
git clone https://github.com/singhaniya0411/MERN-Ecommerce-Project.git
```

### 2️⃣ Install dependencies for frontend, backend, and admin panel
```sh
cd frontend && npm install && cd ../backend && npm install && cd ../admin-panel && npm install
```

### 3️⃣ Set up environment variables
Create a `.env` file in the backend directory and add:
```
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_SECRET=your_razorpay_secret_key
```

### 4️⃣ Run the development servers
```sh
# Start backend
cd backend
nodemon main.js

# Start frontend
cd ../frontend
npm run dev

# Start admin panel
cd ../admin-panel
npm run dev
```

Your website will be available at **`http://localhost:5173/`**, and the admin panel at **`http://localhost:5174/`**.

---
## ✨ Features

### **Customer Panel:**
- Browse crochet products
- Add to cart & checkout securely
- User authentication (Signup/Login)
- Order history tracking
- Search & filter products

### **Admin Panel:**
- Product Management (Add, Edit, Delete)
- Order Management (Update, Refunds)
- User Management (View, Remove Users)
- Dashboard Analytics
- Secure Admin Authentication

### **Backend API:**
- Secure JWT authentication
- RESTful API for CRUD operations
- Cloudinary integration for image storage
- Payment processing via Stripe & Razorpay

---
## 🛠️ Deployment

To deploy on **Vercel** (Frontend & Admin Panel):
```sh
vercel deploy
```
To deploy the **Backend** on Render:
```sh
git push origin main
```
---


## 💡 Need Help?
If you have any questions, feel free to open an issue. 🚀
