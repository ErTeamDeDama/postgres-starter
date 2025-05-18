'use client';

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
      <h1 className="text-2xl font-bold text-white">validafake</h1>

      <div className="space-x-6 hidden md:flex">
        <a href="#features" className="hover:underline text-gray-300">
          Perché validare
        </a>
        <a href="#how" className="hover:underline text-gray-300">
          Come funziona
        </a>
        <a href="#about" className="hover:underline text-gray-300">
          Chi siamo
        </a>
      </div>

      <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-gray-200 transition">
        Inizia
      </button>
    </nav>
  );
};

export default Navbar;
