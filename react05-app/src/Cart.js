import React, { useState } from 'react';

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (index) => {
    const newCartItems = [...cartItems];
    newCartItems.splice(index, 1);
    setCartItems(newCartItems);
  };

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h1>Shopping Cart</h1>
      <div>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <button onClick={() => removeFromCart(index)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
      <h2>Total Price: ${totalPrice}</h2>
      <div>
        <h3>Available Products</h3>
        <ul>
          <li>
            Product 1 - $10 <button onClick={() => addToCart({ name: 'Product 1', price: 10 })}>Add to Cart</button>
          </li>
          <li>
            Product 2 - $20 <button onClick={() => addToCart({ name: 'Product 2', price: 20 })}>Add to Cart</button>
          </li>
          {/* Add more products as needed */}
        </ul>
      </div>
    </div>
  );
}

export default Cart;
