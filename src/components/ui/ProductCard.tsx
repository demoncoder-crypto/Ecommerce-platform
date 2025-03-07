'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { getFirstImageFromList } from '@/utils/imageUtils';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrls: string;
  category: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, description, price, imageUrls, category } = product;

  const addToCart = () => {
    // This would be implemented with a cart context or API call
    console.log(`Added ${name} to cart`);
  };

  const addToWishlist = () => {
    // This would be implemented with a wishlist context or API call
    console.log(`Added ${name} to wishlist`);
  };

  return (
    <div className="card group">
      {/* Product Image */}
      <div className="relative h-64 w-full overflow-hidden">
        <Link href={`/products/${id}`}>
          <div className="relative h-full w-full">
            <Image
              src={getFirstImageFromList(imageUrls)}
              alt={name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
        <div className="absolute top-2 right-2 flex flex-col space-y-2">
          <button
            onClick={addToWishlist}
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label="Add to wishlist"
          >
            <FiHeart className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <div className="mb-1">
          <span className="text-xs text-gray-500">{category}</span>
        </div>
        <Link href={`/products/${id}`} className="block">
          <h3 className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors">
            {name}
          </h3>
        </Link>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">${price.toFixed(2)}</span>
          <button
            onClick={addToCart}
            className="btn-primary p-2 rounded-full"
            aria-label="Add to cart"
          >
            <FiShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 