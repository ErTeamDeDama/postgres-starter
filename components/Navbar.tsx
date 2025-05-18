'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-900 via-black to-gray-900 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-3xl font-extrabold text-white hover:text-blue-500 transition-colors duration-300"
            >
              Home
            </Link>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-300 hover:text-white transition duration-300">
              Home
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition duration-300">
              Chi siamo
            </Link>
            <Link href="#" className="text-gray-300 hover:text-white transition duration-300">
              Contatti
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/admin"
              className="bg-blue-600 text-white px-5 py-2 rounded-md hover:bg-blue-500 shadow-lg transition duration-300"
            >
              Accedi Admin
            </Link>
          </div>

          {/* Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 space-y-4 bg-gradient-to-b from-black to-gray-900 border-t border-gray-700">
          <Link href="/" className="block text-gray-300 hover:text-white text-lg">
            Home
          </Link>
          <Link href="#" className="block text-gray-300 hover:text-white text-lg">
            Chi siamo
          </Link>
          <Link href="#" className="block text-gray-300 hover:text-white text-lg">
            Contatti
          </Link>
          <Link
            href="/admin"
            className="block text-white bg-blue-600 px-6 py-2 rounded-md hover:bg-blue-500 shadow-md"
          >
            Accedi Admin
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
