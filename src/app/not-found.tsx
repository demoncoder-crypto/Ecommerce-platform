import Link from 'next/link';
import { FiHome, FiShoppingBag } from 'react-icons/fi';

export default function NotFound() {
  return (
    <div className="container py-16 text-center">
      <h1 className="text-5xl font-bold text-gray-800 mb-6">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
        The page you are looking for might have been removed, had its name changed,
        or is temporarily unavailable.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <Link href="/" className="btn-primary flex items-center justify-center">
          <FiHome className="mr-2" />
          Back to Home
        </Link>
        <Link href="/products" className="btn-outline flex items-center justify-center">
          <FiShoppingBag className="mr-2" />
          Browse Products
        </Link>
      </div>
    </div>
  );
} 