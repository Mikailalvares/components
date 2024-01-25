// App.js
import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import axios from "axios";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Home";
import ProtectedRoutes from "./ProtectedRoutes";
import Cart from "./Components/Cart";
import ProductDetails from "./Components/ProductDetails";
import "./App.css";
import ProductList from "./Components/ProductList";
import Shop from "./Components/Shop";
import Searchbar from "./Components/Searchbar";
import Footer from "./Components/Footer";
import Logo from "./Components/Logo";
import Checkout from "./Components/Checkout";

function App() {
  const [token, setToken] = useState("");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Your existing code for token and cartItems initialization
  }, []);

  const handleAddToCart = (product) => {
    console.log("Adding to cart:", product);
    setCartItems((prevCartItems) => [...prevCartItems, product]);
  };

  return (
    <>
      <Logo />
      <div>
        <div></div>
      </div>

      <Router>
        <nav className="nav-items">
          <div className="navbar">
            <div>
              <Link className="link-to-paths" to="/">
                Home
              </Link>
            </div>
            <div>
              <Link className="link-to-paths" to="/login">
                Login
              </Link>
            </div>
            <div>
              <Link className="link-to-paths" to="/Signup">
                Signup
              </Link>
            </div>
            <div>
              <Link className="link-to-paths" to="/shop">
                Shop
              </Link>
            </div>
            <div>
              <Link className="link-to-paths" to="/cart">
                Cart
              </Link>
            </div>
          </div>
        </nav>

        <div></div>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/Signup" element={<Signup />} />

          <Route path="/shop" element={<ProductList />} />

          <Route
            path="/products/:productId"
            element={<ProductDetails onAddToCart={handleAddToCart} />}
          />
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/checkout" element={<Checkout cartItems={cartItems} />} />

          <Route element={<ProtectedRoutes />}>
            <Route element={<Home />} path="/home" />
          </Route>

          <Route index element={<Navigate to="/login" />} />

          <Route
            path="/products"
            element={<ProductList onAddToCart={handleAddToCart} />}
          />
        </Routes>
      </Router>

      <Searchbar />
      <Footer />
    </>
  );
}

export default App;
