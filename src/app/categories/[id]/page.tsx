import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiFilter, FiGrid, FiList, FiShoppingCart } from 'react-icons/fi';
import { getImageUrl, getFirstImageFromList } from '@/utils/imageUtils';

// This would normally come from a database
const getCategoryById = async (id: string) => {
  // Mock category data
  const categories = {
    '1': {
      id: '1',
      name: 'Electronics',
      description: 'The latest gadgets and tech innovations for your modern lifestyle.',
      image: '/images/categories/electronics.jpg',
      banner: '/images/categories/electronics.jpg',
    },
    '2': {
      id: '2',
      name: 'Fashion',
      description: 'Trendy clothing, accessories, and footwear for all occasions.',
      image: '/images/categories/fashion.jpg',
      banner: '/images/categories/fashion.jpg',
    },
    '3': {
      id: '3',
      name: 'Home & Kitchen',
      description: 'Transform your space with stylish and functional home products.',
      image: '/images/categories/home.jpg',
      banner: '/images/categories/home.jpg',
    },
    '4': {
      id: '4',
      name: 'Beauty',
      description: 'Premium skincare, makeup, and personal care items for your beauty routine.',
      image: '/images/categories/beauty.jpg',
      banner: '/images/categories/beauty.jpg',
    },
  };
  
  return categories[id as keyof typeof categories];
};

// This would normally come from a database
const getProductsByCategory = async (categoryId: string) => {
  // Mock products data filtered by category
  const allProducts = [
    {
      id: '1',
      name: 'Wireless Headphones',
      description: 'Premium noise-cancelling wireless headphones with long battery life.',
      price: 199.99,
      imageUrls: '/images/products/headphones.jpg',
      category: 'Electronics',
      categoryId: '1',
    },
    {
      id: '2',
      name: 'Smart Watch',
      description: 'Track your fitness and stay connected with this stylish smart watch.',
      price: 249.99,
      imageUrls: '/images/products/smartwatch.jpg',
      category: 'Electronics',
      categoryId: '1',
    },
    {
      id: '3',
      name: 'Leather Backpack',
      description: 'Stylish and durable leather backpack for everyday use.',
      price: 89.99,
      imageUrls: '/images/products/backpack.jpg',
      category: 'Fashion',
      categoryId: '2',
    },
    {
      id: '4',
      name: 'Ceramic Coffee Mug',
      description: 'Elegant ceramic coffee mug with minimalist design.',
      price: 24.99,
      imageUrls: '/images/products/mug.jpg',
      category: 'Home',
      categoryId: '3',
    },
  ];
  
  return allProducts.filter(product => product.categoryId === categoryId);
};

export default async function CategoryPage({ params }: { params: { id: string } }) {
  const category = await getCategoryById(params.id);
  const products = await getProductsByCategory(params.id);

  if (!category) {
    return (
      <div className="container py-8">
        <h1 className="text-3xl font-bold mb-6">Category not found</h1>
        <Link href="/categories" className="text-primary hover:underline">
          Return to categories
        </Link>
      </div>
    );
  }

  return (
    <div>
      {/* Category Banner */}
      <div className="relative h-64 w-full">
        <Image
          src={getImageUrl(category.banner)}
          alt={category.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-center p-8">
          <div className="container">
            <Link href="/categories" className="flex items-center text-white mb-4 hover:underline">
              <FiArrowLeft className="mr-2" />
              Back to Categories
            </Link>
            <h1 className="text-4xl font-bold text-white mb-2">{category.name}</h1>
            <p className="text-white/90 text-lg max-w-2xl">{category.description}</p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        {/* Filters and View Options */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-4 md:mb-0">
            <button className="btn-outline flex items-center mr-2">
              <FiFilter className="mr-2" />
              Filter
            </button>
            <select className="input ml-2 py-2 px-3">
              <option value="">Subcategories</option>
              <option value="subcategory1">Subcategory 1</option>
              <option value="subcategory2">Subcategory 2</option>
              <option value="subcategory3">Subcategory 3</option>
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
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <div key={product.id} className="card group">
                {/* Product Image */}
                <div className="relative h-64 w-full overflow-hidden">
                  <Link href={`/products/${product.id}`}>
                    <div className="relative h-full w-full">
                      <Image
                        src={getFirstImageFromList(product.imageUrls)}
                        alt={product.name}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                  </Link>
                </div>

                {/* Product Info */}
                <div className="p-4">
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
        ) : (
          <div className="text-center py-12">
            <h2 className="text-2xl font-medium text-gray-600 mb-4">No products found in this category</h2>
            <p className="text-gray-500 mb-6">Try checking out our other categories or check back later for new products.</p>
            <Link href="/categories" className="btn-primary px-6 py-2 rounded-md">
              Browse Categories
            </Link>
          </div>
        )}
      </div>
    </div>
  );
} 