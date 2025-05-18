'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center px-8 py-6 border-b border-white/10 sticky top-0 z-50 backdrop-blur-md">
      <Link href="/">
        <Image src="/ValidaFakeWhite.png" alt="ValidaFake logo" width={120} height={40} />
      </Link>

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

      <Link href="/login" className= "text-2xl font-bold text-white"> Login
      </Link>
    </nav>
  );
};

export default Navbar;
