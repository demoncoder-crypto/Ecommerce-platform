import Image from 'next/image';
import Link from 'next/link';
import { FiCheck } from 'react-icons/fi';

export default function AboutPage() {
  return (
    <div className="container py-8">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-primary to-primary/70 text-white rounded-lg overflow-hidden mb-12">
        <div className="absolute inset-0 opacity-20 mix-blend-overlay">
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center" />
        </div>
        <div className="relative z-10 py-16 px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About ShopHub</h1>
          <p className="text-xl max-w-3xl">
            We are on a mission to provide high-quality products that enrich your everyday life,
            with exceptional customer service and a seamless shopping experience.
          </p>
        </div>
      </div>

      {/* Our Story */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Story</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-lg mb-4">
              Founded in 2020, ShopHub was born from a simple idea: to create an online shopping
              destination that offers carefully curated products while providing an exceptional
              customer experience.
            </p>
            <p className="text-lg mb-4">
              What started as a small passion project has grown into a trusted e-commerce platform
              serving thousands of customers. We're proud of our journey and excited about the
              future as we continue to expand our offerings and enhance your shopping experience.
            </p>
            <p className="text-lg">
              Our team is driven by the belief that shopping online should be easy, enjoyable,
              and reliable. We stand behind every product we sell and value the trust our customers
              place in us.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="relative h-96 w-full">
              <div className="absolute inset-0 bg-gray-200 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                Image: Our Team
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="mb-16 bg-gray-50 py-12 px-6 rounded-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
              <FiCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality</h3>
            <p>
              We carefully select every product in our inventory, ensuring that we offer only the
              highest quality items that meet our standards of excellence.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
              <FiCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Transparency</h3>
            <p>
              We believe in being honest and transparent in everything we do, from product
              descriptions to pricing, shipping policies, and customer communication.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="w-12 h-12 bg-primary/20 text-primary rounded-full flex items-center justify-center mb-4">
              <FiCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer First</h3>
            <p>
              Our customers are at the heart of everything we do. We strive to exceed expectations
              with responsive support and a hassle-free shopping experience.
            </p>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((member) => (
            <div key={member} className="text-center">
              <div className="relative h-64 w-full mb-4 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                  Team Member {member}
                </div>
              </div>
              <h3 className="text-xl font-semibold">Team Member {member}</h3>
              <p className="text-gray-600">Position Title</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-12 bg-gray-50 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Start Shopping Today</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join thousands of satisfied customers who have discovered their favorite products on ShopHub.
        </p>
        <Link href="/products" className="btn-primary px-8 py-3 text-lg rounded-md">
          Explore Our Products
        </Link>
      </section>
    </div>
  );
} 