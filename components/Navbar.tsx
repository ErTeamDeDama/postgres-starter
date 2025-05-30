'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi'; // icone da react-icons

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-black text-white relative sticky">
      {/* Logo */}
      <Link href="/">
        <Image src="/ValidaFakePrimario.png" alt="ValidaFake logo" width={50} height={40} />
      </Link>

      {/* Hamburger Icon - visibile solo su mobile */}
      <button
        className="md:hidden text-white text-3xl"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        {menuOpen ? <FiX /> : <FiMenu />}
      </button>

      {/* Menu Desktop */}
      <div className="hidden md:flex space-x-6">
        <Link href="/fake-toolkit" className="hover:text-aquaAccent">Rileva le Fake News</Link>
        <Link href="/origins-goals" className="hover:text-aquaAccent">Origine e scopo</Link>
        <Link href="/about" className="hover:text-aquaAccent">Chi siamo</Link>
      </div>  

      {/* Login - sempre visibile */}
      <Link href="/login" className="text-xl font-bold ml-4 hidden md:block">
        Login
      </Link>

      {/* Menu Mobile */}
      {menuOpen && (
  <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-4 space-y-4 md:hidden z-50">
    <Link href="/fake-toolkit">
      <span onClick={() => setMenuOpen(false)} className="cursor-pointer">Rileva le Fake News</span>
    </Link>
    <Link href="/origins-goals">
      <span onClick={() => setMenuOpen(false)} className="cursor-pointer">Origine e scopo</span>
    </Link>
    <Link href="/about">
      <span onClick={() => setMenuOpen(false)} className="cursor-pointer">Chi siamo</span>
    </Link>
    <Link href="/login">
      <span onClick={() => setMenuOpen(false)} className="font-bold cursor-pointer">Login</span>
    </Link>
  </div>
)}

    </nav>
  );
};


export default Navbar;
