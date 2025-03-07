'use client';

import Link from 'next/link';
import Image from 'next/image';

const FeaturedCategories = () => {
  // Mock categories data
  const categories = [
    {
      id: '1',
      name: 'Electronics',
      image: '/images/categories/electronics.jpg',
      itemCount: 120,
    },
    {
      id: '2',
      name: 'Fashion',
      image: '/images/categories/fashion.jpg',
      itemCount: 350,
    },
    {
      id: '3',
      name: 'Home & Kitchen',
      image: '/images/categories/home.jpg',
      itemCount: 230,
    },
    {
      id: '4',
      name: 'Beauty',
      image: '/images/categories/beauty.jpg',
      itemCount: 180,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link
          key={category.id}
          href={`/categories/${category.id}`}
          className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
        >
          <div className="relative h-48 w-full">
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-4">
              <h3 className="text-xl font-semibold text-white">{category.name}</h3>
              <p className="text-sm text-gray-200">{category.itemCount} Products</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default FeaturedCategories; 