import Image from 'next/image';
import Link from 'next/link';
import { FiTrash2, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import { getFirstImageFromList } from '@/utils/imageUtils';
import CartItemsList from '@/components/ui/CartItemsList';

// This would normally come from a database or cart context
const getCartItems = async () => {
  // Mock cart data
  return [
    {
      id: '1',
      productId: '1',
      product: {
        id: '1',
        name: 'Wireless Headphones',
        price: 199.99,
        imageUrls: '/images/products/headphones.jpg',
      },
      quantity: 1,
    },
    {
      id: '2',
      productId: '2',
      product: {
        id: '2',
        name: 'Smart Watch',
        price: 249.99,
        imageUrls: '/images/products/smartwatch.jpg',
      },
      quantity: 1,
    },
  ];
};

export default async function CartPage() {
  const initialCartItems = await getCartItems();
  const subtotal = initialCartItems.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0
  );
  const shipping = 15;
  const tax = subtotal * 0.07;
  const total = subtotal + shipping + tax;

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      
      {initialCartItems.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="md:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b bg-gray-50">
                <h2 className="text-lg font-semibold">Cart Items ({initialCartItems.length})</h2>
              </div>
              
              <CartItemsList initialItems={initialCartItems} />
              
              <div className="p-4 border-t bg-gray-50">
                <Link 
                  href="/products" 
                  className="flex items-center text-primary hover:underline"
                >
                  <FiArrowLeft className="mr-2" />
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          
          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
              <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Order Summary</h2>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t pt-2 mt-2 border-dashed">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              <button 
                className="w-full btn-primary py-3 rounded-md mb-4"
              >
                Proceed to Checkout
              </button>
              
              <div className="text-xs text-gray-500 text-center">
                <p>Secure checkout powered by Stripe</p>
                <p className="mt-1">Free shipping on orders over $50</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-lg shadow-md">
          <div className="flex justify-center mb-4">
            <FiShoppingBag className="w-16 h-16 text-gray-300" />
          </div>
          <h2 className="text-2xl font-medium text-gray-700 mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added any products to your cart yet.</p>
          <Link 
            href="/products" 
            className="btn-primary px-6 py-2 rounded-md"
          >
            Start Shopping
          </Link>
        </div>
      )}
    </div>
  );
} 