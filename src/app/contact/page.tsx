import { FiMail, FiMapPin, FiPhone, FiMessageCircle } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      
      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Information */}
        <div>
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Have questions about our products, delivery, or need help with an order?
              We're here to help! Reach out to us using any of the methods below.
            </p>
            
            <ul className="space-y-6">
              <li className="flex items-start">
                <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center mr-4">
                  <FiMail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Email</h3>
                  <p className="text-gray-600">support@shophub.com</p>
                  <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center mr-4">
                  <FiPhone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                  <p className="text-sm text-gray-500 mt-1">Monday to Friday, 9am to 5pm EST</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="w-10 h-10 bg-primary/20 text-primary rounded-full flex items-center justify-center mr-4">
                  <FiMapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-900">Office</h3>
                  <p className="text-gray-600">123 E-Commerce Street</p>
                  <p className="text-gray-600">New York, NY 10001</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">How long does shipping take?</h3>
                <p className="text-gray-600">
                  Standard shipping typically takes 3-5 business days within the continental US. 
                  Express shipping options are available at checkout.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">What is your return policy?</h3>
                <p className="text-gray-600">
                  We offer a 30-day return policy for most items. Products must be in original 
                  condition with tags attached and original packaging.
                </p>
              </div>
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Do you ship internationally?</h3>
                <p className="text-gray-600">
                  Yes, we ship to most countries worldwide. International shipping rates and 
                  delivery times vary by location.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 flex items-center">
            <FiMessageCircle className="w-6 h-6 mr-2 text-primary" />
            Send Us a Message
          </h2>
          
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="input w-full"
                  required
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="input w-full"
                  required
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
                name="email"
                className="input w-full"
                required
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <select id="subject" name="subject" className="input w-full">
                <option value="general">General Inquiry</option>
                <option value="order">Order Status</option>
                <option value="returns">Returns & Refunds</option>
                <option value="product">Product Question</option>
                <option value="feedback">Feedback</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className="input w-full"
                required
              />
            </div>
            
            <div className="flex items-start">
              <input
                id="privacy"
                name="privacy"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
                required
              />
              <label htmlFor="privacy" className="ml-2 block text-sm text-gray-600">
                I agree to the privacy policy and consent to having my data processed for the purpose of contacting me.
              </label>
            </div>
            
            <button
              type="submit"
              className="btn-primary w-full py-3 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
} 