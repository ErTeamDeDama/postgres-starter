'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Impedisci lo scroll della pagina quando il menu mobile è aperto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <nav className="flex items-center justify-between px-4 py-2 bg-darkBackground text-white relative sticky top-0 z-50">
      {/* Logo */}
      <Link href="/">
        <Image src="/ValidaFakePrimario.png" alt="ValidaFake logo" width={50} height={40} />
      </Link>

      {/* Bottone Hamburger (solo su mobile) */}
      {/* Bottone Mobile: Hamburger o X */}
<button
  className="md:hidden text-white text-3xl z-[100000]"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label={menuOpen ? 'Chiudi menu' : 'Apri menu'}
>
  {menuOpen ? <FiX /> : <FiMenu />}
</button>

      <div className="hidden md:flex w-full items-center">
  {/* Menu centrato */}
  <div className="flex justify-center flex-grow space-x-6">
    <Link href="/fake-toolkit" className="hover:text-aquaAccent">Rileva le Fake News</Link>
    <Link href="/origins-goals" className="hover:text-aquaAccent">Origine e scopo</Link>
    <Link href="/about" className="hover:text-aquaAccent">Chi siamo</Link>
  </div>

  {/* Login a destra */}
  <div className="mr-4">
    <Link href="/login" className="text-xl font-bold hover:text-aquaAccent">Login</Link>
  </div>
</div>


      {/* Sidebar Mobile - Slide da sinistra */}
      <div
        className={`fixed top-0 left-0 w-full h-full z-[99999] bg-darkBackround text-white transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >

        {/* Link Sidebar */}
        <div
  className={`fixed left-0 top-[60px] w-full h-[calc(100%-100px)] z-[99999] bg-black text-white transform transition-transform duration-300 ease-in-out ${
    menuOpen ? 'translate-x-0' : '-translate-x-full'
  }`}
>
  <div className="flex flex-col items-start px-6 py-6 space-y-6 text-lg">
    <Link href="/fake-toolkit" onClick={() => setMenuOpen(false)} className="hover:text-aquaAccent">
      Rileva le Fake News
    </Link>
    <Link href="/origins-goals" onClick={() => setMenuOpen(false)} className="hover:text-aquaAccent">
      Origine e scopo
    </Link>
    <Link href="/about" onClick={() => setMenuOpen(false)} className="hover:text-aquaAccent">
      Chi siamo
    </Link>
    <Link href="/login" onClick={() => setMenuOpen(false)} className="font-bold hover:text-aquaAccent">
      Login
    </Link>
  </div>
</div>

      </div>
    </nav>
  );
};

export default Navbar;
