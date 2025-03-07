'use client';

import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX, FiShoppingCart, FiUser, FiSearch } from 'react-icons/fi';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl font-bold text-primary">
            ShopHub
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-primary">
              Products
            </Link>
            <Link href="/categories" className="text-gray-700 hover:text-primary">
              Categories
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary">
              Contact
            </Link>
          </nav>

          {/* Search, Cart, and User Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-primary">
              <FiSearch className="w-5 h-5" />
            </button>
            <Link href="/cart" className="text-gray-700 hover:text-primary relative">
              <FiShoppingCart className="w-5 h-5" />
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
            <Link href="/account" className="text-gray-700 hover:text-primary">
              <FiUser className="w-5 h-5" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-primary">
                Home
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-primary">
                Products
              </Link>
              <Link href="/categories" className="text-gray-700 hover:text-primary">
                Categories
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary">
                About
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary">
                Contact
              </Link>
            </nav>
            <div className="flex items-center space-x-4 mt-4">
              <button className="text-gray-700 hover:text-primary">
                <FiSearch className="w-5 h-5" />
              </button>
              <Link href="/cart" className="text-gray-700 hover:text-primary relative">
                <FiShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </Link>
              <Link href="/account" className="text-gray-700 hover:text-primary">
                <FiUser className="w-5 h-5" />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 