import Image from 'next/image';
import Link from 'next/link';
import { FiFilter, FiGrid, FiList, FiShoppingCart } from 'react-icons/fi';

// This would normally come from a database
const getProducts = async () => {
  // Mock products data
  return [
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
    // Add more products as needed
  ];
};

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">All Products</h1>
      
      {/* Filters and View Options */}
      <div className="flex flex-col md:flex-row justify-between mb-6">
        <div className="mb-4 md:mb-0">
          <button className="btn-outline flex items-center mr-2">
            <FiFilter className="mr-2" />
            Filter
          </button>
          <select className="input ml-2 py-2 px-3">
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Fashion">Fashion</option>
            <option value="Home">Home</option>
            <option value="Beauty">Beauty</option>
          </select>
        </div>
        <div className="flex">
          <button className="btn-outline flex items-center mr-2 active">
            <FiGrid className="mr-2" />
            Grid
          </button>
          <button className="btn-outline flex items-center">
            <FiList className="mr-2" />
            List
          </button>
          <select className="input ml-4 py-2 px-3">
            <option value="featured">Featured</option>
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="card group">
            {/* Product Image */}
            <div className="relative h-64 w-full overflow-hidden">
              <Link href={`/products/${product.id}`}>
                <div className="relative h-full w-full">
                  <Image
                    src={product.imageUrls.split(',')[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
            </div>

            {/* Product Info */}
            <div className="p-4">
              <div className="mb-1">
                <span className="text-xs text-gray-500">{product.category}</span>
              </div>
              <Link href={`/products/${product.id}`} className="block">
                <h3 className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors">
                  {product.name}
                </h3>
              </Link>
              <p className="mt-1 text-sm text-gray-600 line-clamp-2">{product.description}</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                <button
                  className="btn-primary p-2 rounded-full"
                  aria-label="Add to cart"
                >
                  <FiShoppingCart className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12">
        <nav className="flex items-center">
          <button className="btn-outline px-4 py-2 mr-2">Previous</button>
          <button className="btn-primary px-4 py-2 mx-1">1</button>
          <button className="btn-outline px-4 py-2 mx-1">2</button>
          <button className="btn-outline px-4 py-2 mx-1">3</button>
          <button className="btn-outline px-4 py-2 ml-2">Next</button>
        </nav>
      </div>
    </div>
  );
} 