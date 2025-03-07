import Image from 'next/image';
import Link from 'next/link';
import ProductCard from '@/components/ui/ProductCard';
import FeaturedCategories from '@/components/ui/FeaturedCategories';
import HeroSection from '@/components/ui/HeroSection';
import TestimonialSection from '@/components/ui/TestimonialSection';
import NewsletterSection from '@/components/ui/NewsletterSection';
import { getImageUrl } from '@/utils/imageUtils';

export default function Home() {
  // Mock featured products data
  const featuredProducts = [
    {
      id: '1',
      name: 'Wireless Headphones',
      description: 'Premium noise-cancelling wireless headphones with long battery life.',
      price: 199.99,
      imageUrls: '/images/products/headphones.jpg',
      category: 'Electronics',
    },
    {
      id: '2',
      name: 'Smart Watch',
      description: 'Track your fitness and stay connected with this stylish smart watch.',
      price: 249.99,
      imageUrls: '/images/products/smartwatch.jpg',
      category: 'Electronics',
    },
    {
      id: '3',
      name: 'Leather Backpack',
      description: 'Stylish and durable leather backpack for everyday use.',
      price: 89.99,
      imageUrls: '/images/products/backpack.jpg',
      category: 'Fashion',
    },
    {
      id: '4',
      name: 'Ceramic Coffee Mug',
      description: 'Elegant ceramic coffee mug with minimalist design.',
      price: 24.99,
      imageUrls: '/images/products/mug.jpg',
      category: 'Home',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Categories */}
      <section className="py-12 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <FeaturedCategories />
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12">
        <div className="container">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Featured Products</h2>
            <Link href="/products" className="text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Promotional Banner */}
      <section className="py-12 bg-primary text-white">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-6 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">Summer Sale</h2>
              <p className="text-xl mb-6">Get up to 50% off on selected items. Limited time offer!</p>
              <Link href="/products" className="bg-white text-primary px-6 py-3 rounded-md font-medium hover:bg-gray-100">
                Shop Now
              </Link>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-64 h-64">
                <Image
                  src={getImageUrl('/images/sale-banner.jpg')}
                  alt="Summer Sale"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialSection />

      {/* Newsletter */}
      <NewsletterSection />
    </div>
  );
} 