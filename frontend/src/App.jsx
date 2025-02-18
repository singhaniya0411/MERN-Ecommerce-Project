import React from "react";
import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact";
import Verify from "./pages/Verify";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Router>
        <ToastContainer />
        <Navbar />
        <SearchBar />
        <Routes>
          <Route path="/MERN-Ecommerce-Project" element={<Home />} />
          <Route
            path="/MERN-Ecommerce-Project/collection"
            element={<Collection />}
          />
          <Route path="/MERN-Ecommerce-Project/cart" element={<Cart />} />
          <Route path="/MERN-Ecommerce-Project/contact" element={<Contact />} />
          <Route path="/MERN-Ecommerce-Project/login" element={<Login />} />
          <Route path="/MERN-Ecommerce-Project/orders" element={<Orders />} />
          <Route
            path="/MERN-Ecommerce-Project/placeorder"
            element={<PlaceOrder />}
          />
          <Route
            path="/MERN-Ecommerce-Project/product/:productID"
            element={<Product />}
          />
          <Route path="/MERN-Ecommerce-Project/about" element={<About />} />
          <Route path="/MERN-Ecommerce-Project/verify" element={<Verify />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
