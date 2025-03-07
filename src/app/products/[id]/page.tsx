import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';
import AddToCartButton from '@/components/ui/AddToCartButton';
import { getImageUrl } from '@/utils/imageUtils';

// This would normally come from a database
const getProductById = async (id: string) => {
  // Mock product data - using a lookup object to return different products based on ID
  const products = {
    '1': {
      id: '1',
      name: 'Wireless Headphones',
      description: 'Premium noise-cancelling wireless headphones with long battery life. Experience crystal-clear sound quality and exceptional comfort for extended listening sessions. Features include Bluetooth 5.0 connectivity, 30-hour battery life, and active noise cancellation technology.',
      price: 199.99,
      imageUrls: '/images/products/headphones.jpg,/images/products/headphones-2.jpg,/images/products/headphones-3.jpg',
      category: 'Electronics',
      inventory: 15,
      rating: 4.5,
      reviews: 128,
      features: [
        'Active Noise Cancellation',
        'Bluetooth 5.0',
        '30-hour battery life',
        'Comfortable over-ear design',
        'Built-in microphone for calls',
        'Quick charge (5 min charge = 1 hour playback)',
      ],
    },
    '2': {
      id: '2',
      name: 'Smart Watch',
      description: 'Track your fitness and stay connected with this stylish smart watch. Monitor your health metrics, receive notifications, and enjoy a wide range of smart features in an elegant design.',
      price: 249.99,
      imageUrls: '/images/products/smartwatch.jpg',
      category: 'Electronics',
      inventory: 22,
      rating: 4.3,
      reviews: 95,
      features: [
        'Health and fitness tracking',
        'Heart rate monitoring',
        'Sleep tracking',
        'Notification alerts',
        'Water resistant',
        '7-day battery life',
      ],
    },
    '3': {
      id: '3',
      name: 'Leather Backpack',
      description: 'Stylish and durable leather backpack for everyday use. Features premium craftsmanship, multiple compartments, and comfortable straps for all-day carry.',
      price: 89.99,
      imageUrls: '/images/products/backpack.jpg',
      category: 'Fashion',
      inventory: 30,
      rating: 4.7,
      reviews: 112,
      features: [
        'Genuine leather construction',
        'Padded laptop compartment',
        'Multiple interior pockets',
        'Adjustable shoulder straps',
        'Water-resistant finish',
        'Metal hardware and zippers',
      ],
    },
    '4': {
      id: '4',
      name: 'Ceramic Coffee Mug',
      description: 'Elegant ceramic coffee mug with minimalist design. Perfect for your morning coffee or tea, featuring a comfortable handle and excellent heat retention.',
      price: 24.99,
      imageUrls: '/images/products/mug.jpg',
      category: 'Home',
      inventory: 45,
      rating: 4.2,
      reviews: 78,
      features: [
        'Premium ceramic material',
        'Ergonomic handle',
        'Dishwasher safe',
        'Microwave safe',
        '12oz capacity',
        'Minimalist design',
      ],
    },
  };
  
  // Return the product with the matching ID, or a default product if not found
  return products[id as keyof typeof products] || products['1'];
};

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);
  const images = product.imageUrls.split(',');

  return (
    <div className="container py-12">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link href="/products" className="flex items-center text-primary hover:underline">
          <FiArrowLeft className="mr-2" />
          Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Product Images */}
        <div>
          <div className="relative h-96 w-full mb-4 rounded-lg overflow-hidden">
            <Image
              src={getImageUrl(images[0])}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {images.slice(1).map((image, index) => (
              <div key={index} className="relative h-24 rounded-md overflow-hidden">
                <Image
                  src={getImageUrl(image)}
                  alt={`${product.name} view ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`}
                />
              ))}
            </div>
            <span className="text-gray-600">
              {product.rating} ({product.reviews} reviews)
            </span>
          </div>
          
          <div className="text-2xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</div>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-gray-600">{product.description}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-2">Features</h2>
            <ul className="list-disc pl-5 text-gray-600">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="mb-6">
            <div className="flex items-center text-gray-600 mb-2">
              <span className={product.inventory > 0 ? 'text-green-600' : 'text-red-600'}>
                {product.inventory > 0 ? 'In Stock' : 'Out of Stock'}
              </span>
              {product.inventory > 0 && (
                <span className="ml-2">({product.inventory} available)</span>
              )}
            </div>
          </div>
          
          <div className="flex space-x-4">
            <AddToCartButton productId={product.id} />
            <button className="btn-outline flex items-center">
              <FiHeart className="mr-2" />
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 