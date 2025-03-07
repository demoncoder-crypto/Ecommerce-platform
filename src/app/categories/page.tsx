import Image from 'next/image';
import Link from 'next/link';
import { getImageUrl } from '@/utils/imageUtils';

// This would normally come from a database
const getCategories = async () => {
  // Mock categories data
  return [
    {
      id: '1',
      name: 'Electronics',
      description: 'The latest gadgets and tech innovations for your modern lifestyle.',
      image: '/images/categories/electronics.jpg',
      itemCount: 120,
    },
    {
      id: '2',
      name: 'Fashion',
      description: 'Trendy clothing, accessories, and footwear for all occasions.',
      image: '/images/categories/fashion.jpg',
      itemCount: 350,
    },
    {
      id: '3',
      name: 'Home & Kitchen',
      description: 'Transform your space with stylish and functional home products.',
      image: '/images/categories/home.jpg',
      itemCount: 230,
    },
    {
      id: '4',
      name: 'Beauty',
      description: 'Premium skincare, makeup, and personal care items for your beauty routine.',
      image: '/images/categories/beauty.jpg',
      itemCount: 180,
    },
  ];
};

export default async function CategoriesPage() {
  const categories = await getCategories();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/categories/${category.id}`}
            className="group block overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="relative h-64 w-full">
              <Image
                src={getImageUrl(category.image)}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-semibold text-white mb-1">{category.name}</h3>
                <p className="text-gray-200 mb-2">{category.description}</p>
                <p className="text-sm text-gray-300">{category.itemCount} Products</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      {/* Featured Collections */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Featured Collections</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-primary/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">New Arrivals</h3>
            <p className="text-gray-600 mb-4">Discover our latest products added this week</p>
            <Link href="/products?collection=new" className="text-primary hover:underline">
              Shop Now →
            </Link>
          </div>
          <div className="bg-secondary/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Summer Essentials</h3>
            <p className="text-gray-600 mb-4">Everything you need for the summer season</p>
            <Link href="/products?collection=summer" className="text-primary hover:underline">
              Shop Now →
            </Link>
          </div>
          <div className="bg-accent/10 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">Best Sellers</h3>
            <p className="text-gray-600 mb-4">Our most popular products loved by customers</p>
            <Link href="/products?collection=bestsellers" className="text-primary hover:underline">
              Shop Now →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 