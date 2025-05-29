'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi'; // icone da react-icons

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-black text-white fixed">
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
        <Link href="/fake-toolkit" className="hover:softTeal">Rileva le Fake News</Link>
        <Link href="/origins-goals" className="hover:softTeal">Origine e scopo</Link>
        <Link href="/about" className="hover:softTeal">Chi siamo</Link>
      </div>

      {/* Login - sempre visibile */}
      <Link href="/login" className="text-xl font-bold ml-4 hidden md:block">
        Login
      </Link>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-black flex flex-col items-center py-4 space-y-4 md:hidden z-50">
          <Link href="/fake-toolkit" onClick={() => setMenuOpen(false)}>Rileva le Fake News</Link>
          <Link href="/origins-goals" onClick={() => setMenuOpen(false)}>Origine e scopo</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>Chi siamo</Link>
          <Link href="/login" onClick={() => setMenuOpen(false)} className="font-bold">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
