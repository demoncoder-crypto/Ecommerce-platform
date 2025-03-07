import Link from 'next/link';
import { FiUser, FiShoppingBag, FiHeart, FiMapPin, FiCreditCard, FiLogOut } from 'react-icons/fi';

export default function AccountPage() {
  // For a real app, you would check if the user is authenticated
  // and show a login page if not
  
  // Mocked user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    joinDate: 'January 2023',
  };

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-8">My Account</h1>
      
      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar Navigation */}
        <div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6 bg-primary text-white">
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mr-4">
                  <FiUser className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-lg">{user.name}</p>
                  <p className="text-sm opacity-90">{user.email}</p>
                </div>
              </div>
              <p className="text-xs opacity-80">Member since {user.joinDate}</p>
            </div>
            
            <nav className="p-4">
              <ul className="space-y-1">
                <li className="border-l-4 border-primary bg-gray-50">
                  <Link href="/account" className="flex items-center px-4 py-3 text-primary">
                    <FiUser className="mr-3" />
                    Profile Information
                  </Link>
                </li>
                <li>
                  <Link href="/account/orders" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
                    <FiShoppingBag className="mr-3" />
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link href="/account/wishlist" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
                    <FiHeart className="mr-3" />
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link href="/account/addresses" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
                    <FiMapPin className="mr-3" />
                    Addresses
                  </Link>
                </li>
                <li>
                  <Link href="/account/payment" className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50">
                    <FiCreditCard className="mr-3" />
                    Payment Methods
                  </Link>
                </li>
                <li>
                  <button className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-50 w-full text-left">
                    <FiLogOut className="mr-3" />
                    Log Out
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="md:col-span-3">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-6 pb-2 border-b">Profile Information</h2>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="input w-full"
                    defaultValue="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    className="input w-full"
                    defaultValue="Doe"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="input w-full"
                  defaultValue={user.email}
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="input w-full"
                  defaultValue="+1 (555) 123-4567"
                />
              </div>
              
              <div className="pt-4 border-t">
                <h3 className="text-lg font-medium mb-4">Change Password</h3>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Current Password
                    </label>
                    <input
                      type="password"
                      id="currentPassword"
                      className="input w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      New Password
                    </label>
                    <input
                      type="password"
                      id="newPassword"
                      className="input w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirm New Password
                    </label>
                    <input
                      type="password"
                      id="confirmPassword"
                      className="input w-full"
                    />
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end">
                <button type="submit" className="btn-primary px-6 py-2 rounded-md">
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
} 