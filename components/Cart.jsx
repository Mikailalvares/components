// Cart.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Checkout from './Checkout';

const Cart = ({ cartItems, onCheckout }) => {
  const [isCheckout, setIsCheckout] = useState(false);

  const handleCheckout = () => {
    setIsCheckout(true);
  };

  const calculateTotalPrice = () => {
    
    if (cartItems && Array.isArray(cartItems) && cartItems.length > 0) {
      return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    } else {
      return 0;
    }
  };

  const handlePlaceOrder = (formData, cartItems) => {
    // Handle the logic for placing the order
    console.log('Placing order with data:', formData);
    console.log('Cart items:', cartItems);
    
  };

  return (
    <div>
      {isCheckout ? (
        <Checkout cartItems={cartItems} onPlaceOrder={handlePlaceOrder} />
      ) : (
        <div>
          {cartItems && Array.isArray(cartItems) && cartItems.length === 0 ? (
            <p>Cart is empty.</p>
          ) : (
            <div>
              <ul>
                {cartItems &&
                  Array.isArray(cartItems) &&
                  cartItems.map((item, index) => (
                    <li key={index}>
                      {item.name} - ${item.price.toFixed(2)}
                    </li>
                  ))}
              </ul>
              <p>Total Price: Kshs {calculateTotalPrice()}</p>
              <button onClick={handleCheckout}>Proceed to Checkout</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;

