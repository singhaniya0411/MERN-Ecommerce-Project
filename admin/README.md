# 🛠️ Embusshh - Admin Panel (Dashboard)

The **Embusshh Admin Panel** is a React-based dashboard for managing crochet products, orders, and users efficiently.

## 🚀 Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **Backend Communication**: Axios (API calls)
- **Authentication**: JWT-based Admin Auth

## 📂 Folder Structure

```
admin-panel/
│── src/
│   ├── components/
│   │   ├── Login.jsx      # Admin login component
│   │   ├── Navbar.jsx     # Top navigation bar
│   │   ├── Sidebar.jsx    # Sidebar navigation
│   ├── pages/
│   │   ├── Add.jsx        # Add new products/orders
│   │   ├── List.jsx       # View list of products/orders
│   │   ├── Order.jsx      # Manage orders
│   ├── context/
│   │   ├── AdminContext.js  # Global state management
│   ├── App.jsx  # Main application entry point
│   ├── index.jsx # React DOM rendering
│── package.json # Dependencies & scripts
│── tailwind.config.js # Tailwind customization
│── .env # Store API keys & secrets
```

## ⚡ Getting Started

### 1️⃣ Clone the repository
```sh
git clone https://github.com/singhaniya0411/MERN-Ecommerce-Project.git
cd admin
```

### 2️⃣ Install dependencies
```sh
npm install
```

### 3️⃣ Set up environment variables  
Create a `.env` file in the root directory and add:

```
REACT_APP_API_BASE_URL=http://localhost:5000/api
REACT_APP_JWT_SECRET=your_jwt_secret_key
```

### 4️⃣ Start the development server
```sh
npm start
```
Your admin panel will run at **`http://localhost:5174/`**.

## ✨ Features

### 🔑 Admin Capabilities:
- **Product Management** (Add, Edit, Delete Products)
- **Order Management** (View, Update Order Status, Refund Processing)
- **User Management** (View Registered Users, Delete Users)
- **Dashboard Analytics** (View Sales, Revenue, Total Users)
- **Secure Admin Authentication**

## 🛠️ Deployment

To deploy on **Vercel**:
```sh
vercel deploy
```

## 📜 License

This project is licensed under the **MIT License**.

## 💡 Need Help?
If you have any questions, feel free to open an issue. 🚀
