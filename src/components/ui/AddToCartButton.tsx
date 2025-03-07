'use client';

import { useState } from 'react';
import { FiShoppingCart, FiCheck } from 'react-icons/fi';

interface AddToCartButtonProps {
  productId: string;
}

const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    // This would typically call an API or update a cart context
    console.log(`Adding product ${productId} to cart with quantity ${quantity}`);
    
    // Show success state
    setIsAdded(true);
    
    // Reset after 2 seconds
    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="flex items-center">
      <div className="mr-4">
        <label htmlFor="quantity" className="sr-only">
          Quantity
        </label>
        <div className="flex items-center border border-gray-300 rounded-md">
          <button
            type="button"
            className="px-3 py-2 text-gray-600 hover:text-gray-700"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            aria-label="Decrease quantity"
          >
            -
          </button>
          <input
            type="number"
            id="quantity"
            name="quantity"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            className="w-12 text-center border-0 focus:ring-0"
          />
          <button
            type="button"
            className="px-3 py-2 text-gray-600 hover:text-gray-700"
            onClick={() => setQuantity(quantity + 1)}
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>
      <button
        onClick={handleAddToCart}
        className={`btn ${
          isAdded ? 'bg-green-600 hover:bg-green-700' : 'btn-primary'
        } flex items-center`}
        disabled={isAdded}
      >
        {isAdded ? (
          <>
            <FiCheck className="mr-2" />
            Added to Cart
          </>
        ) : (
          <>
            <FiShoppingCart className="mr-2" />
            Add to Cart
          </>
        )}
      </button>
    </div>
  );
};

export default AddToCartButton; 