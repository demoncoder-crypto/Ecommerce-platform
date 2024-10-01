import React, { useEffect, useState } from 'react';
import API from '../api';

const HomePage: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await API.get('/products');
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Products</h1>
      {/* Render products */}
    </div>
  );
};

export default HomePage;
