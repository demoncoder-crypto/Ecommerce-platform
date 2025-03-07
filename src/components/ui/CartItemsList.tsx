'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiTrash2 } from 'react-icons/fi';
import { getFirstImageFromList } from '@/utils/imageUtils';

// Define types for cart items
interface CartProduct {
  id: string;
  name: string;
  price: number;
  imageUrls: string;
}

interface CartItem {
  id: string;
  productId: string;
  product: CartProduct;
  quantity: number;
}

interface CartItemsListProps {
  initialItems: CartItem[];
}

export default function CartItemsList({ initialItems }: CartItemsListProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialItems);

  const handleRemoveItem = (itemId: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const handleUpdateQuantity = (itemId: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  if (cartItems.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">All items have been removed from your cart.</p>
        <Link href="/products" className="text-primary hover:underline mt-4 inline-block">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <ul className="divide-y divide-gray-200">
      {cartItems.map((item) => (
        <li key={item.id} className="p-4 flex flex-col sm:flex-row items-center">
          <div className="flex-shrink-0 mr-4 mb-4 sm:mb-0">
            <div className="relative w-24 h-24 rounded overflow-hidden">
              <Image
                src={getFirstImageFromList(item.product.imageUrls)}
                alt={item.product.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex-grow sm:mr-4">
            <Link 
              href={`/products/${item.product.id}`}
              className="text-lg font-medium text-gray-800 hover:text-primary"
            >
              {item.product.name}
            </Link>
            <p className="text-gray-600 mt-1">${item.product.price.toFixed(2)}</p>
          </div>
          
          <div className="flex items-center mt-4 sm:mt-0">
            <div className="flex items-center border rounded-md mr-4">
              <button 
                className="px-3 py-1 border-r"
                aria-label="Decrease quantity"
                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className="px-4 py-1">{item.quantity}</span>
              <button 
                className="px-3 py-1 border-l"
                aria-label="Increase quantity"
                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
            <button 
              className="text-red-500 hover:text-red-700"
              aria-label="Remove item"
              onClick={() => handleRemoveItem(item.id)}
            >
              <FiTrash2 className="w-5 h-5" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
} 