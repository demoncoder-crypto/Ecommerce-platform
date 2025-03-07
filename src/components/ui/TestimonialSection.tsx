'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { getImageUrl } from '@/utils/imageUtils';

// Define types for testimonial data
interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  quote: string;
}

const TestimonialSection = () => {
  // Mock testimonials data
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      image: '/images/testimonials/person1.jpg',
      quote: "I've been shopping with ShopHub for over a year now and I'm consistently impressed by their quality products and excellent customer service. The delivery is always prompt and the packaging is eco-friendly!",
    },
    {
      id: '2',
      name: 'Michael Chen',
      role: 'Tech Enthusiast',
      image: '/images/testimonials/person2.jpg',
      quote: "As someone who's very particular about electronics, I appreciate the detailed product descriptions and honest reviews on ShopHub. Their price matching policy is also a huge plus!",
    },
    {
      id: '3',
      name: 'Emily Rodriguez',
      role: 'Fashion Blogger',
      image: '/images/testimonials/person3.jpg',
      quote: "ShopHub has become my go-to for fashion finds. Their curated collections are always on trend, and the return process is hassle-free. Highly recommend!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-lg shadow-lg p-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-8">
                <div className="relative h-24 w-24 rounded-full overflow-hidden">
                  <Image
                    src={getImageUrl(currentTestimonial.image)}
                    alt={currentTestimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div>
                <blockquote className="text-lg italic text-gray-700 mb-4">
                  "{currentTestimonial.quote}"
                </blockquote>
                <div>
                  <p className="font-semibold text-gray-900">{currentTestimonial.name}</p>
                  <p className="text-sm text-gray-500">{currentTestimonial.role}</p>
                </div>
              </div>
            </div>
            <div className="flex justify-center mt-8 space-x-4">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Previous testimonial"
              >
                <FiChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition-colors"
                aria-label="Next testimonial"
              >
                <FiChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection; 