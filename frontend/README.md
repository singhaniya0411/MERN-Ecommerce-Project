# 🛍️ Embussshh - E-Commerce Clothing Website (Frontend)

**Embussshh** is a modern, stylish e-commerce platform for clothing, offering a seamless shopping experience with a user-friendly interface, secure payments, and an efficient admin dashboard.

## 🚀 Tech Stack

- **Frontend**: React.js (Vite), Tailwind CSS
- **Routing**: React Router
- **API Handling**: Axios
- **Authentication**: JWT (JSON Web Token)
- **Payment Integration**: Stripe

## 📂 Folder Structure

```
frontend/
│── public/            # Static assets
│── src/
│   ├── components/    # Reusable UI components
│   │   ├── Bestseller.js
│   │   ├── CartTotal.js
│   │   ├── Footer.js
│   │   ├── Hero.js
│   │   ├── LatestCollection.js
│   │   ├── Navbar.js
│   │   ├── NewsletterBox.js
│   │   ├── Policy.js
│   │   ├── ProductItem.js
│   │   ├── RelatedProduct.js
│   │   ├── SearchBar.js
│   │   ├── Title.js
│   ├── pages/         # Main pages
│   │   ├── About.js
│   │   ├── Cart.js
│   │   ├── Collection.js
│   │   ├── Contact.js
│   │   ├── Home.js
│   │   ├── Login.js
│   │   ├── Orders.js
│   │   ├── PlaceOrder.js
│   │   ├── Product.js
│   │   ├── Verify.js
│   ├── context/       # Context API for global state
│   │   ├── ShopContext.js
│   ├── App.jsx        # Main App component
│   ├── index.jsx      # Entry point
│   ├── main.jsx       # ReactDOM rendering
│── .env               # Environment variables (API keys, etc.)
│── package.json       # Dependencies & scripts
│── README.md          # Documentation
```

## ⚡ Getting Started

### 1️⃣ Clone the repository
```sh
git clone https://github.com/singhaniya0411/MERN-Ecommerce-Project.git
cd frontend
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up environment variables  
Create a `.env` file in the root directory and add:

```
VITE_BACKEND_URL=http://localhost:5000
VITE_STRIPE_PUBLIC_KEY=your_stripe_public_key
```

### 4️⃣ Run the development server
```sh
npm run dev
```
Your app will be available at **`http://localhost:5173/`**.

## ✨ Features

### 🛒 User Features:
- **Modern UI/UX** with responsive design
- **Product Listings** with filtering and sorting
- **Shopping Cart & Checkout** process
- **User Authentication** (Login/Register)
- **Secure Payments** using Stripe

### 🔑 Admin Features:
- **Product Management** (Add, Edit, Delete)
- **Order Management** (View, Process, Update)
- **User Management** (Block, Delete Users)
- **Dashboard** with analytics and insights

## 📸 Screenshots

![Home Page](screenshots/home.png)
![Product Page](screenshots/product.png)
![Cart Page](screenshots/cart.png)

## 🛠️ Deployment

To deploy your frontend on **Vercel** or **Netlify**:

1. **Build the project**  
   ```sh
   npm run build
   ```
2. **Deploy on Vercel**  
   ```sh
   vercel deploy
   ```
   OR  
   **Deploy on Netlify**  
   - Upload the `dist` folder manually to Netlify  
   OR  
   - Use the Netlify CLI:
   ```sh
   netlify deploy --prod
   ```

## 📜 License

This project is licensed under the **MIT License**.

## ✨ Contributing

Contributions are welcome! If you’d like to improve Embussshh, feel free to fork the repo and submit a pull request.

## 💡 Need Help?
If you have any questions, feel free to reach out or open an issue. 🚀
