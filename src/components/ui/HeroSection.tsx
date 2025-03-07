'use client';

import Link from 'next/link';
import Image from 'next/image';
import { getImageUrl } from '@/utils/imageUtils';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-900 text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src={getImageUrl('/images/hero-bg.jpg')}
          alt="Hero background"
          fill
          priority
          className="object-cover opacity-40"
        />
      </div>
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover Quality Products for Every Need
          </h1>
          <p className="text-xl mb-8">
            Shop the latest trends and essentials with confidence. Free shipping on orders over $50.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="btn-primary px-8 py-3 text-base">
              Shop Now
            </Link>
            <Link href="/categories" className="btn-outline text-white border-white px-8 py-3 text-base">
              Browse Categories
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 