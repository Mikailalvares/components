// ProductList.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductCard from "./ProductCard";
import Cart from "./Cart";




function ProductList({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://deviceharbor.onrender.com/public/products"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      {/* <h2>Product List</h2> */}

      <div>
        {products.map((product) => (
          <Link to={`/products/${product.id}`} key={product.id}>
            <div>
              <ProductCard product={product} onAddToCart={onAddToCart} />
              
            </div>
          </Link>
          
        ))}
      </div>
     

      <Cart cartItems={onAddToCart} />
    </div>
  );
}

export default ProductList;
