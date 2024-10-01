// src/pages/CartPage.tsx
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { ICartItem } from '../types';

const CartPage: React.FC = () => {
  const { cartItems, removeFromCart, updateCartItemQuantity } = useContext(CartContext);

  const totalPrice = cartItems.reduce(
    (acc: number, item: ICartItem) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>
          Your cart is empty. <Link to="/">Go back to shopping.</Link>
        </p>
      ) : (
        <div>
          {cartItems.map((item: ICartItem) => (
            <div key={item.product._id} className="cart-item">
              <img src={item.product.imageUrl} alt={item.product.name} />
              <div>
                <h2>{item.product.name}</h2>
                <p>${item.product.price.toFixed(2)}</p>
                <div>
                  <label htmlFor={`quantity-${item.product._id}`}>Quantity:</label>
                  <select
                    id={`quantity-${item.product._id}`}
                    value={item.quantity}
                    onChange={(e) =>
                      updateCartItemQuantity(item.product._id, Number(e.target.value))
                    }
                  >
                    {Array.from({ length: item.product.countInStock }, (_, x) => (
                      <option key={x + 1} value={x + 1}>
                        {x + 1}
                      </option>
                    ))}
                  </select>
                </div>
                <button onClick={() => removeFromCart(item.product._id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-summary">
            <h2>Total: ${totalPrice.toFixed(2)}</h2>
            <Link to="/checkout">
              <button>Proceed to Checkout</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
